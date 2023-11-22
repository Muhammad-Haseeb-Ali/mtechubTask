import { useEffect, useState } from "react";
import Enter from "./components/Enter";
import ChatWrapper from "./components/ChatWrapper";
import useSockets from "./hooks/useSockets";

function App() {
  const [identity, setIdentity] = useState(localStorage.getItem("username"));

  return (
    <>
      <ChatWrapper identity={identity} />
      {!identity && <Enter setIdentity={setIdentity} />}
    </>
  );
}

export default App;
