import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 70%;
  max-height: 90%;
  overflow: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

export const ProductName = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;
