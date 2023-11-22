import styled from "styled-components";
import { FiSend } from "react-icons/fi";
import { FaLink } from "react-icons/fa";
import { useRef } from "react";
import { sendMessage } from "../utils/socket";

export default function MsgBox() {
    const imgRef = useRef()
    const msgRef = useRef()


  const MsgBox = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: center;
    gap: 10px;

    * {
      height: 50%;
      border: none;
      border-radius: 10px;
    }

    input {
      width: 800px;
      font-size: 20px;
      padding-left: 10px;
      border: 2px solid gray;
    }

    label {
      background-color: #eff1f2;
      aspect-ratio: 1/1;
      padding-left: 17px;
      padding-top: 15px;
      cursor: pointer;
    }

    button {
      background-color: black;
      color: white;
      aspect-ratio: 1/1;
      cursor: pointer;
    }
  `;

    const msgHandler = ()=>{
        const msg = msgRef.current.value.trim()
        const img = imgRef.current.files.item(0)

        if(msg.length > 0 || img) sendMessage(msg, img)
    }

  return (
    <MsgBox>
      <input type="text" placeholder="Enter your Message" ref={msgRef} />
      <input type="file" id="image" style={{ display: "none" }} multiple="false" accept=".jpg,.png,.pdf"  ref={imgRef} />
      <label for="image" >
        <FaLink />
      </label>
      <button onClick={msgHandler}>
        <FiSend />
      </button>
    </MsgBox>
  );
}
