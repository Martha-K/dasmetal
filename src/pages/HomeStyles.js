import styled from "styled-components";

export const StyledSlide = styled.img`
  max-width: 1100px;
  height: 500px;
  object-fit: cover;
  width: 100%;
  display: block;
  margin: auto;
  border-radius: 20px;

  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const Hero = styled.div`
  padding: 30px;
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
`;

export const CompanyDescription = styled.div`
  display: block;
  text-align: center;
  background-color: white;
  overflow-x: hidden;
`;

export const FittingsInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  margin: 30px;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    &:nth-child(even) {
      flex-direction: column;
    }
  }
`;

export const Text = styled.p`
  max-width: 460px;
  font-size: 20px;
  text-align: left;
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 20px;
`;

export const Subtitle = styled.h2`
  font-size: 35px;
  margin-bottom: 60px;
`;
