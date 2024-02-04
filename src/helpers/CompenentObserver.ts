import styled from "styled-components";

export const Div = styled.div`
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
    animation: fadeInFromLeft 0.5s ease-out forwards;

    &.src-prop {
      animation: fadeInFromRight 0.5s ease-out forwards;
    }
  }
`;
