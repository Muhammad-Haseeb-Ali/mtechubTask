import styled from "styled-components";
import MsgBox from "./MsgBox";

export default function ChatSection({ messages }) {

  const ChatSection = styled.section`
    height: 100vh;
    width: calc(100vw - 250px);
  `;

  const Messages = styled.section`
    width: 100%;
    height: calc(100vh - 100px);
    overflow-y: scroll;
    padding: 20px;
    padding-bottom: 0;
    display: flex;
    flex-flow: column;
  `;

  const Msg = styled.div`
  display: flex;
  flex-flow: column;

    img {
      width: 250px;
      background-color: gray;
      padding: 10px;
      border-radius: 10px;
      margin-bottom: 5px;
    }

    p {
      padding: 10px 20px;
      border-radius: 12px;
      margin-bottom: 10px;
    }
  `;

  const Send = styled(Msg)`
    align-self: flex-end;
    align-items: flex-end;
    small{
      text-align: right;
    }
    p {
      background-color: black;
      color: white;
    }
  `;

  const Recive = styled(Msg)`
    align-self: flex-start;
    align-items: flex-start;
    p {
      background-color: #eff1f2;
    }
  `;

  const Chat = ({ ismine, children }) => {
    return (
      <>{ismine ? <Send>{children}</Send> : <Recive>{children}</Recive>}</>
    );
  };

  return (
    <ChatSection>
      <Messages>
        {messages.map((msg) => (
          <Chat ismine={msg.ismine}>
            <small>{msg.sender}</small>
            {msg.image && <img src={msg.image} />}
            {msg.message && <p>{msg.message}</p>}
          </Chat>
        ))}
      </Messages>
      <MsgBox />
    </ChatSection>
  );
}
