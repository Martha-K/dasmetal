import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  padding: 0 16px;
`;

export const SectionTitle = styled.h2`
  font-size: 35px;
  margin-bottom: 10px;
  color: #333;
  border-bottom: 2px solid #5e6b80;
  padding-bottom: 5px;
`;

export const Paragraph = styled.p`
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 20px;
  color: #555;
  text-indent: 12mm;
`;

export const Div = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.5); 
  border-radius: 20px;
  transition: all 0.3s ease-in-out;
  margin-bottom: 40px;

  &:hover {
    transform: scale(1.02);
    box-shadow: 20px 20px 10px rgba(0, 0, 0, 0.5); 
  }
`;
