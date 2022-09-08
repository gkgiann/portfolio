import styled from "styled-components";

export const TechContainer = styled.div`
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
