import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 2rem;
  font-size: 1.8rem;

  padding: 2.4rem 2.8rem;

  @media (max-width: 500px) {
    justify-content: center;
  }

  @keyframes child-animation {
    0% {
      opacity: 0;
      transform: translateY(-10rem);
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Link = styled.a`
  animation: child-animation 2s;
  text-decoration: none;
  font-weight: 700;

  color: ${(p) => p.theme.text};

  &:hover {
    transition: color 0.2s;
    color: ${(p) => p.theme["link-hover"]};
  }
`;

export const IconButton = styled.button`
  animation: child-animation 2s;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  background: transparent;
  color: ${(p) => p.theme.text};

  &:hover {
    transition: color 0.2s;
    color: ${(p) => p.theme["link-hover"]};
  }

  svg {
    width: 2rem;
    height: 2rem;
  }
`;
