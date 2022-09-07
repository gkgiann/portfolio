import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 8rem 2.8rem;
  background: ${(p) => p.theme["footer-bg"]};

  font-size: 1.8rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 3.6rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  a {
    transition: 0.2s;
    text-decoration: none;
    color: ${(p) => p.theme.text};

    &:hover {
      color: ${(p) => p.theme["link-hover"]};
    }

    svg {
      transition: 0.3s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
