import styled from "styled-components";

export const HomeContainer = styled.section`
  padding: 6rem 2.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3.2rem;

  img {
    animation: img-animation 2s;
    width: 50%;
    min-width: 380px;
    max-width: 650px;
  }

  @media (max-width: 771px) {
    justify-content: center;
    img {
      display: none;
    }
  }
  @keyframes img-animation {
    0% {
      opacity: 0;
      transform: translateX(-20rem);
    }
    100% {
      opacity: 1;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1.2rem;

  h1 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.8rem;

    font-size: 4.4rem;

    animation: h1-animation 2s;

    @media (max-width: 771px) {
      justify-content: center;
    }
  }
  span {
    animation: span-animation 2s;
    font-size: 2.4rem;
  }

  @keyframes span-animation {
    0% {
      opacity: 0;
      transform: translateY(-10rem);
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes h1-animation {
    0% {
      opacity: 0;
      transform: translateY(10rem);
    }
    100% {
      opacity: 1;
    }
  }
`;
