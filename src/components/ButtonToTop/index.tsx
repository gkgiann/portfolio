import { ArrowUp } from "phosphor-react";
import { useEffect, useState } from "react";
import { ButtonToTopContainer } from "./styles";

export function ButtonToTop() {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      setScrollValue(scroll);
    });
  }, []);

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
