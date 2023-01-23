import styled from "styled-components";

export const MenuOpenedContainer = styled.nav`
  position: fixed;
  width: 100vw;
  height: 100vh;

  margin-top: -3.2rem;

  overflow-y: hidden;
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(p) => p.theme.bg + "ee"};

  & > button {
    position: absolute;
    top: 0;
    right: 0;

    padding: 1.6rem;
  }

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

interface MenuClosedContainerProps {
  scroll: number;
}

export const MenuClosedContainer = styled.nav<MenuClosedContainerProps>`
  display: flex;
  justify-content: flex-end;
  padding: 1.6rem;

  width: 100vw;

  position: fixed;
  right: 0;
  top: 0;

  z-index: 999;
  box-shadow: ${(p) =>
    p.scroll < 55 ? "none" : "0px 4px 4px rgba(0, 0, 0, 0.25)"};
  background: ${(p) => (p.scroll < 40 ? "transparent" : p.theme["bg"])};

  @media (min-width: 711px) {
    display: none;
  }
`;

export const MenuIconButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${(p) => p.theme.text};
`;
