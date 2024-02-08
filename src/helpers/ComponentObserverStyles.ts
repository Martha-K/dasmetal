import styled from "styled-components";

export const Div = styled.div`
  visibility: hidden;
  max-width: 460px;
  width: 100%;

  @keyframes fadeInFromLeft {
    from {
      transform: translateX(-400px);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes fadeInFromRight {
    from {
      transform: translateX(400px);
    }
    to {
      transform: translateX(0);
    }
  }

  &.visible {
    animation: fadeInFromLeft 0.5s ease-in-out forwards;
    visibility: visible;

    &.right {
      animation: fadeInFromRight 0.5s ease-in-out forwards;
    }
  }
`;
