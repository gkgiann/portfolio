import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 1.2rem;

  padding: 2.4rem 2.8rem;
`;

export const Link = styled.a`
  text-decoration: none;
  font-weight: 700;

  color: ${(p) => p.theme.text};

  &:hover {
    transition: color 0.2s;
    color: ${(p) => p.theme["link-hover"]};
  }
`;

export const IconButton = styled.button`
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
`;
