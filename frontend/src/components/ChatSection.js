import styled from "styled-components";
import MsgBox from "./MsgBox";

export default function ChatSection() {
  const ChatSection = styled.section`
    position: relative;
    height: 100vh;
    width: calc(100vw - 250px);
    padding: 20px;
    display: flex;
    flex-flow: column;
  `;

  const Chat = styled.div`
    max-width: 500px;
    padding: 10px 20px;
    border-radius: 12px;
    margin-bottom: 10px;
  `;

  const Send = styled(Chat)`
    background-color: black;
    color: white;
    align-self: flex-end;
  `;

  const Recive = styled(Chat)`
    background-color: #eff1f2;
    align-self: flex-start;
  `;
  
  return (
    <ChatSection>
      <Send>dfghjk</Send>
      <Recive>fghj</Recive>
      <Recive>fghj</Recive>
      <MsgBox/>
    </ChatSection>
  );
}
