import { ArrowUp } from "phosphor-react";
import { useEffect, useState } from "react";
import { useScroll } from "../../contexts/scroll";
import { ButtonToTopContainer } from "./styles";

export function ButtonToTop() {
  const { scrollValue } = useScroll();

  function handleButtonClick() {
    window.scrollTo({ top: 0 });
  }

  return (
    <>
      {scrollValue > 200 && (
        <ButtonToTopContainer onClick={handleButtonClick}>
          <ArrowUp size={16} weight="bold" />
        </ButtonToTopContainer>
      )}
    </>
  );
}
