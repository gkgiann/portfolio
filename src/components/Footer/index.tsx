import {
  EnvelopeSimple,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "phosphor-react";
import { FooterContainer } from "./styles";

export function Footer() {
  return (
    <FooterContainer id="footer">
      <div>
        <a
          title="GitHub - Gian"
          href="https://github.com/gian-lucas"
          target="_blank"
        >
          <GithubLogo weight="fill" size={30} />
        </a>
        <a
          title="LinkedIn - Gian"
          href="https://www.linkedin.com/in/gian-lucas-66299618b"
          target="_blank"
        >
          <LinkedinLogo weight="fill" size={30} />
        </a>
        <a
          title="Instagram - Gian"
          href="https://instagram.com/gian.tsx"
          target="_blank"
        >
          <InstagramLogo weight="fill" size={30} />
        </a>
        <a
          title="Gmail - Gian"
          href="mailto:lgian584@gmail.com"
          target="_blank"
        >
          <EnvelopeSimple weight="fill" size={30} />
        </a>
      </div>

      <p>Gian ©2022. Todos os direitos reservados.</p>
    </FooterContainer>
  );
}
