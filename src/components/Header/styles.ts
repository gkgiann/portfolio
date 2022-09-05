import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;

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
