import styled from "styled-components";
import armature from "../img/armature.jpg";
import slide from "../img/slide.jpg";

export const ButtonWrapper = styled.div`
  position: relative;
  background-image: ${(props) =>
    props["data-image"] === "armature" ? `url(${armature})` : `url(${slide})`};
  width: 30vw;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  filter: blur(3px);

  @media (max-width: 760px) {
    background-image: none;
    height: 80px;
  }
`;

export const Div = styled.div`
  overflow: hidden;
  position: relative;
`;

export const ProductName = styled.div`
  position: absolute;
  width: 100%;
  height: calc(50% - 20px);
  font-size: 60px;
  bottom: 50%;
  color: white;
  text-align: center;
  font-weight: 500;

  @media (max-width: 1200px) {
    font-size: 36px;
    height: calc(50% - 65px);
  }
  @media (max-width: 760px) {
    height: calc(75% - 2px);
    text-align: center;
  }
`;

export const ButtonStyles = styled.div`
  position: relative;
  border-radius: 20px;
  padding: 30px;
  padding-bottom: ${(props) => (props["data-active"] ? "100px" : "30px")};
  margin-bottom: ${(props) => (props["data-active"] ? "0" : "70px")};
  background-color: ${(props) =>
    props["data-active"] ? "#00416A" : "#00416A80"};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  @media (max-width: 760px) {
    padding: 20px;
    padding-bottom: ${(props) => (props["data-active"] ? "50px" : "15px")};
    margin-bottom: ${(props) => (props["data-active"] ? "0" : "35px")};
  }
`;

export const RoundCorner = styled.div`
  position: absolute;
  bottom: -19px;
  left: ${(props) => !props["data-isright"] && "-20px"};
  right: ${(props) => props["data-isright"] && "-20px"};
  background-color: #00416a;
  border-right: ${(props) => !props["data-isright"] && "20px solid #00416A;"};
  border-left: ${(props) => props["data-isright"] && "20px solid #00416A;"};

  border-bottom: 20px solid #00416a;
  border-radius: 20px;
  opacity: ${(props) => (props["data-active"] ? "1" : "0")};
  transition-delay: ${(props) => (props["data-active"] ? "0.3s" : "0")};

  @media (max-width: 760px) {
    transition-delay: ${(props) => (props["data-active"] ? "0.3s" : "0")};
  }
`;

export const InnerDiv = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  border-bottom-right-radius: ${(props) => !props["data-isright"] && "20px"};
  border-bottom-left-radius: ${(props) => props["data-isright"] && "20px"};
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 7vw;
  justify-content: center;
  align-items: start;
`;

export const Img = styled.img`
  width: 260px;
  height: 180px;
  border-radius: 20px;
  object-fit: cover;

  @media (max-width: 550px) {
    width: 160px;
  }
`;

export const ProductWrapping = styled.div`
  background-color: #00416a;
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
  justify-content: center;

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
  cursor: pointer;

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
