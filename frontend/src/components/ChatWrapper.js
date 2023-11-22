import styled from "styled-components";
import UserList from "./UserList";
import ChatSection from "./ChatSection";
import useSockets from "../hooks/useSockets";

export default function ChatWrapper({identity}) {
    const {connections, messages} = useSockets(identity)

  const ChatWrapper = styled.main`
    display: flex;
    flex-flow: row;
  `;

  return (
    <ChatWrapper>
      <UserList connections={connections} />
      <ChatSection messages={messages} />
    </ChatWrapper>
  );
}
