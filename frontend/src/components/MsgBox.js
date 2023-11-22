import styled from "styled-components";
import { FiSend } from "react-icons/fi";
import { FaLink } from "react-icons/fa";
import { useRef, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { sendMessage } from "../utils/socket";

export default function MsgBox() {
  const [image, setImage] = useState();
  const imgRef = useRef();
  const msgRef = useRef();

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
      position: relative;
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

  const handleFileChange = (e) => {
    const img = imgRef.current.files.item(0);

    if (img) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const imageContainer = document.getElementById("imageContainer");
        const imgElement = document.createElement("img");

        imgElement.src = e.target.result;
        imgElement.alt = "Selected Image";
        imgElement.style.width = "250px"
        imageContainer.innerHTML = "";
        imageContainer.appendChild(imgElement);
      };
      reader.readAsDataURL(img);

      setImage(img);
    }
  };

  const msgHandler = () => {
    const msg = msgRef.current.value.trim();

    if (msg.length > 0 || image) sendMessage(msg, image);
  };

  return (
    <>
      {image && <div style={{position: "absolute", bottom: "100px", right: "180px", padding: "10px", borderRadius: "10px", backgroundColor: "gray"}} id="imageContainer"></div>}
      <MsgBox>
        <input type="text" placeholder="Enter your Message" ref={msgRef} />
        <input
          type="file"
          id="image"
          style={{ display: "none" }}
          multiple="false"
          accept=".jpg,.png,.pdf"
          ref={imgRef}
          onChange={handleFileChange}
        />
        <label for={!image && "image"}>
          {image && (
            <IoMdCloseCircle
              style={{
                position: "absolute",
                top: "-10px",
                right: "-10px",
                fontSize: "30px",
              }}
              onClick={() => setImage(null)}
            />
          )}
          <FaLink />
        </label>
        <button onClick={msgHandler}>
          <FiSend />
        </button>
      </MsgBox>
    </>
  );
}
