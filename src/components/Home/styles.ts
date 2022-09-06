import styled from "styled-components";

export const HomeContainer = styled.section`
  padding: 0 2.8rem;
  margin-top: 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
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
    }
    span {
      font-size: 2.4rem;
    }
  }

  img {
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
`;
