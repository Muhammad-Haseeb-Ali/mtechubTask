import styled from "styled-components";

export default function Popup ({children}){

    const Popup = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 1;
`;

return (
    <Popup>{children}</Popup>
)

}