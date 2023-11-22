import { io } from "socket.io-client";

var socket;

export default function connectSocket(userName, cb) {
  if (!userName) return;

  socket = io("http://localhost:4000/", { query: { username: userName } });
  socket.userName = userName
  socket.on("connected", cb);
  return socket;
}

export function configSocket(setConnections, setMessages, data) {
  const { chatUsers, chatMsgs } = data;

  console.log({chatMsgs, chatUsers})

  var messages = chatMsgs.map((msg) => {
    if (msg.sender == socket.userName) msg.ismine = true;
    else msg.ismine = false;

    return msg;
  });

  setConnections(chatUsers);
  setMessages(messages);


  socket.on("recive", (msg) => {
    if (msg.sender == socket.userName) msg.ismine = true;
    else msg.ismine = false;

    setMessages((preState) => {
        const lastMsg = preState[preState.length - 1]

        if(lastMsg?.msgId == msg.msgId) return preState
        else return [...preState, msg];
    });
  });

  socket.on("userDisconnected", (connections)=>setConnections(connections))
  socket.on("userConnected", ({chatUsers})=>setConnections(chatUsers))
}

export function sendMessage(msg, img) {
  const message = {
    sender: socket.userName,
    message: msg,
    image: img,
  };

  socket.emit("send", message)
}
