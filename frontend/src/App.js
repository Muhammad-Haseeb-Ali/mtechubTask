import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Enter from "./components/Enter";
import ChatWrapper from "./components/ChatWrapper";

function App() {
  const [identity, setIdentity] = useState(localStorage.getItem("username"));

  useEffect(() => {
    if (identity) {
      const socket = io("ws://localhost:3000/");

      return () => socket.close();
    }
  }, [identity]);

  return (
    <>
      <ChatWrapper />
      {!identity && <Enter setIdentity={setIdentity} />}
    </>
  );
}

export default App;
