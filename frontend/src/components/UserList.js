import styled from "styled-components";

export default function UserList() {
  const UserList = styled.ul`
    height: 100vh;
    width: 250px;
    background-color: black;
    list-style: none;
    color: white;
    padding-top: 30px;

    li {
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

    li:hover {
      background-color: gray;
    }

    h3 {
      font-size: 20px;
    }

    p {
      font-size: 15px;
    }
  `;

  return (
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
  );
}
