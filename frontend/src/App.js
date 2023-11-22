import { useEffect } from "react";
import { io } from "socket.io-client";
import Enter from "./components/Enter";
import ChatWrapper from "./components/ChatWrapper";



function App() {
  // useEffect(() => {
  //   const socket = io("ws://localhost:3000/");

  //   return () => socket.close();
  // });

  return (
    <>
      {/* <Enter /> */}
      <ChatWrapper/>
    </>
  );
}

export default App;
