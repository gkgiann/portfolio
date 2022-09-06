import styled from "styled-components";

export const TechsContainer = styled.section`
  padding: 4rem 2.8rem;
  margin-top: 4rem;

  h1 {
    font-size: 4rem;
  }
`;

export const TechsDiv = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 8rem;
  justify-content: center;
`;

export const Tech = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  gap: 2rem;

  font-size: 2rem;

  img {
    width: 14rem;
    height: 14rem;

    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
