import logo from "./logo.svg";
import styled from "styled-components";
import { FiSend } from "react-icons/fi";
import { FaLink } from "react-icons/fa";

const ChatWrapper = styled.main`
  display: flex;
  flex-flow: row;
`;

const UserList = styled.ul`
  height: 100vh;
  width: 250px;
  background-color: black;
  list-style: none;
  color: white;
  padding-top: 30px;

  li{
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 10px;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
  }

  li:hover{
    background-color: gray;
  }

  h3{
    font-size: 20px;
  }

  p{
    font-size: 15px;
  }

`;

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
`

const Send = styled(Chat)`
background-color: black;
color: white;
align-self: flex-end;
`
const Recive = styled(Chat)`
background-color: #eff1f2;
align-self: flex-start;
`

const MsgBox = styled.div`
position: absolute;
bottom: 0;
left: 0;
width: 100%;
height: 100px;
display: flex;
flex-flow: row;
align-items: center;
justify-content: center;
gap: 10px;

*{
  height: 50%;
  border: none;
  border-radius: 10px;
}

input{
  width: 800px;
  font-size: 20px;
  padding-left: 10px;
  border: 2px solid gray;
}

button{
  aspect-ratio: 1/1;
  cursor: pointer;
}

button:last-child{
  background-color: black;
  color: white;
}
`

function App() {
  return (
    <ChatWrapper>
      <UserList>
        <li>
          <h3>haseeb</h3>
          <p>online</p>
        </li>
        <li>
          <h3>haseeb</h3>
          <p>online</p>
        </li>
        <li>
          <h3>haseeb</h3>
          <p>online</p>
        </li>
        <li>
          <h3>haseeb</h3>
          <p>online</p>
        </li>
        <li>
          <h3>haseeb</h3>
          <p>online</p>
        </li>
        <li>
          <h3>haseeb</h3>
          <p>online</p>
        </li>
      </UserList>
      <ChatSection>
        <Send>
          dfghjk
        </Send>
        <Recive>
          fghj
        </Recive>
        <Recive>
          fghj
        </Recive>
        <MsgBox>
          <input type="text"/>
          <button><FaLink/></button>
          <button><FiSend/></button>
        </MsgBox>
      </ChatSection>
    </ChatWrapper>
  );
}

export default App;
