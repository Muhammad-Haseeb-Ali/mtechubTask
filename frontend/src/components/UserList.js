import styled from "styled-components";

export default function UserList({connections}) {
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
      cursor: pointer;
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
      {
        connections.map((connection, id)=>(
          <li key={id}>
          <h3>{connection.name}</h3>
          <p>{connection.status}</p>
        </li>
        ))
      }
    </UserList>
  );
}
