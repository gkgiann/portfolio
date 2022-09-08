import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  gap: 2rem;

  @media (max-width: 840px) {
    flex-direction: column;

    justify-content: center;
    align-items: center;
  }

  img {
    width: 100%;
    max-width: 450px;
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  h1 {
    font-size: 3.2rem;
  }

  p {
    margin: 2rem 0;
    font-size: 2rem;

    @media (max-width: 840px) {
      max-width: 450px;
    }
  }

  a {
    padding: 0.8rem 1.2rem;
    text-decoration: none;
    border-radius: 8px;
    border: 1px solid ${(p) => p.theme["button-bg"]};
    color: ${(p) => p.theme["button-bg"]};
    transition: 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
