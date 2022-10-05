import styled from "styled-components";

export const MenuOpenedContainer = styled.nav`
  position: fixed;
  width: 100vw;
  height: 100vh;

  overflow-y: hidden;
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(p) => p.theme.bg + "ee"};

  @media (min-width: 711px) {
    display: none;
  }
`;

export const MenuContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2.8rem;

  font-size: 2.8rem;

  svg {
    width: 4rem;
    height: 4rem;
  }
`;

export const MenuClosedContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 1.6rem 1.6rem 0 0;

  @media (min-width: 711px) {
    display: none;
  }
`;

export const MenuIconButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  margin: 1.6rem 1.6rem 0 0;

  border: none;
  background: transparent;
  cursor: pointer;
  color: ${(p) => p.theme.text};
`;
