import { HomeContainer, InfoContainer } from "./styles";
import programmingImg from "../../assets/programming.svg";
import { RocketLaunch } from "phosphor-react";

export function Home() {
  return (
    <HomeContainer>
      <InfoContainer>
        <h1>
          <RocketLaunch weight="bold" /> GIAN LUCAS
        </h1>
        <span>{"<Desenvolvedor Web />"}</span>
      </InfoContainer>

      <img src={programmingImg} alt="" />
    </HomeContainer>
  );
}
