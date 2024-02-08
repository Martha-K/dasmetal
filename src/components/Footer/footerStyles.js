import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  justify-content: space-around;
  background: #5e6b80;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    align-items: center;
    gap: 30px;
  }
`;

export const Contact = styled.address`
  display: flex;
  flex-direction: column;
  margin-left: 90px;
  margin-right: 90px;
  color: white;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    margin-bottom: 5px;
    transition: transform 0.3s ease-in-out;
  }

  a:hover {
    color: black;
    transform: scale(1.1);
  }
`;

export const ListDay = styled.ul`
  list-style-type: none;
`;
