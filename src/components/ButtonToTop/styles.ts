import styled from "styled-components";

export const ButtonToTopContainer = styled.a`
  background: ${(p) => p.theme.text};
  color: ${(p) => p.theme.bg};

  width: fit-content;

  position: fixed;
  bottom: 0;
  right: 0;
  margin: 0 1.6rem 1.6rem 0;

  opacity: 0.6;

  padding: 0.8rem;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.3s;

  &:hover {
    transform: scale(1.1) rotate(360deg);
  }
`;
