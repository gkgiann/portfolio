import styled from "styled-components";

export const ProjectsContainer = styled.section`
  padding: 6.6rem 2.8rem;
  margin-top: 1.2rem;

  h1 {
    font-size: 4rem;
  }

  @media (max-width: 710px) {
    padding-top: 8rem;
  }
`;

export const ProjectsList = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 8rem;
`;
