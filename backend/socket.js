var socketio = require("socket.io");
var cl = require("./utils/consolesUtils");
var { v4: uuidv4 } = require("uuid");
var fs = require("fs");

function SocketHandler(socketServer) {
  const io = socketio(socketServer, {
    cors: {
      origin: "*", // Add your frontend's origin
      methods: ["GET", "POST"],
    },
  });

  var chatUsers = [];
  var chatMsgs = [];

  io.use((socket, next) => {
    const username = socket.handshake.query.username;
    const user = {
      name: username,
      socketId: socket.id,
      status: "online",
    };
    const isUserExist = chatUsers.some((u) => u.name == username);

    if (isUserExist) {
      chatUsers = [...chatUsers.filter((n) => n.name != username), user];
    } else {
      chatUsers = [user, ...chatUsers];
    }

    return next();
  });

  io.on("connection", (socket) => {
    cl.d(`New connection: ${socket.id}`);

    io.emit("connected", {
      chatUsers,
      chatMsgs,
    });

    socket.on("disconnect", () => {
      console.log("user disconnected:", socket.id);
      chatUsers = [
        ...chatUsers.filter((n) => {
          if (n.socketId == socket.id) n.status = "offline";
          return n;
        }),
      ]
      io.emit("userDisconnected",chatUsers)
    });

    socket.on("send", (data) => {
      const msgId = uuidv4();
      data.msgId = msgId;

      if (data.image) {
        const image = Buffer.from(data.image);
        const filePath = "./public/" + msgId + ".png";
        fs.writeFileSync(filePath, image, "binary");
        data.image = `http://localhost:4000/public/${msgId}.png`;
      }

      chatMsgs.push(data);

      io.emit("recive", data);
    });
  });
}

module.exports = SocketHandler;
