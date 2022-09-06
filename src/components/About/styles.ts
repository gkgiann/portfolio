import styled from "styled-components";

export const AboutContainer = styled.main`
  padding: 8rem 2.8rem;
  margin-top: 8rem;

  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2.4rem;

  img {
    width: 100%;
    border-radius: 50%;
  }

  div {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 2.4rem;

    h1 {
      font-size: 4rem;
    }
    p {
      text-align: justify;
      font-size: 2rem;
      line-height: 150%;
    }
  }

  @media (max-width: 710px) {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 4rem;

    img {
      max-width: 350px;
    }
  }
`;

export const LinkButton = styled.a`
  text-decoration: none;
  border-radius: 8px;
  font-weight: 700;
  padding: 1.2rem 1.6rem;
  border: 2px solid transparent;
  color: ${(p) => p.theme.button};
  background: ${(p) => p.theme["button-bg"]};

  &:hover {
    transition: 0.3s;

    border-color: ${(p) => p.theme["button-bg"]};
    color: ${(p) => p.theme["button-bg"]};
    background: transparent;
  }
`;
