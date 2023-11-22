import styled from "styled-components";
import Popup from "./Popup";
import { useRef } from "react";

export default function Enter({setIdentity}) {
    const userNameRef = useRef()

  const Enter = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    padding: 30px 20px;
    background-color: #eff1f2;
    border-radius: 20px;

    p{
      margin: 3px;
    }

    input {
      width: 100%;
      padding: 7px;
      font-size: 20px;
      border: 1px solid gray;
      border-radius: 10px;
      margin: 20px 0;
    }

    button {
      width: 80px;
      padding: 10px 0;
      color: #fff;
      background-color: black;
      cursor: pointer;
      border: none;
      border-radius: 10px;
      font-size: 18px;
    }
  `;

  const setUserName = ()=>{
    const userName = userNameRef.current.value;
    localStorage.setItem("username",userName)
    setIdentity(userName)
  }

  return (
    <Popup>
      <Enter>
        <h1>Welcome to Chat</h1>
        <p>Enter your Name to create Identity.</p>
        <input type="text" placeholder="@username" ref={userNameRef} />
        <center>
          <button onClick={setUserName}>Enter</button>
        </center>
      </Enter>
    </Popup>
  );
}
