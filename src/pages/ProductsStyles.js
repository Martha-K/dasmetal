import styled from "styled-components";
import slide3 from "../img/slide3.jpg";
import slide from "../img/slide.jpg";

export const ButtonWrapper = styled.div`
  position: relative;
  background-image: ${(props) =>
    props["data-image"] === "armature" ? `url(${slide3})` : `url(${slide})`};
  width: 560px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  filter: blur(5px);
`;

export const Div = styled.div`
  overflow: hidden;
`;

export const ProductName = styled.p`
  position: absolute;
  font-size: 60px;
  right: 70%;
  bottom: 50%;
  color: white;
`;

export const ButtonStyles = styled.div`
  /* background-color: #8fa8c7; */
  border-radius: 20px;
  padding: 30px;
  padding-bottom: ${(props) => (props["data-active"] ? "100px" : "30px")};
  background-color: ${(props) =>
    props["data-active"] ? "lightblue" : "#8fa8c7"};
  transition: all 0.3s ease-in-out;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 100px;
  justify-content: center;
  align-items: start;
`;

export const Img = styled.img`
  width: 260px;
  border-radius: 20px;

  @media (max-width: 550px) {
    width: 160px;
  }
`;

export const ProductWrapping = styled.div`
  background-color: lightblue;
  padding: 40px;
`;

export const CardInfoWrapper = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10%;
  }
`;

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 0.75fr));
  grid-gap: 40px;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10%;
  }
`;

export const Card = styled.div`
  margin: 0;
  padding: 20px;
  background-color: #f5f5f5;
  box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 20px 20px 10px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 900px) {
    max-width: 650px;
    width: 100%;
  }
  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10%;
  }
`;
