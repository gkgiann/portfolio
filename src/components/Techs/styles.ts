import styled from "styled-components";

export const TechsContainer = styled.section`
  padding: 6.6rem 2.8rem;
  margin-top: 1.2rem;

  h1 {
    font-size: 4rem;
  }

  @media (max-width: 710px) {
    padding-top: 8rem;
  }
`;

export const TechsDiv = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 8rem;
  justify-content: center;
`;
