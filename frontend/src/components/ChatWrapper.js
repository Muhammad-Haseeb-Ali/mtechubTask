import styled from "styled-components";
import UserList from "./UserList";
import ChatSection from "./ChatSection";

export default function ChatWrapper() {
    
  const ChatWrapper = styled.main`
    display: flex;
    flex-flow: row;
  `;

  return (
    <ChatWrapper>
      <UserList />
      <ChatSection />
    </ChatWrapper>
  );
}
