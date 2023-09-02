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
          data-aos="fade-right"
          title="GitHub - Gian"
          href="https://github.com/gkgiann"
          target="_blank"
        >
          <GithubLogo weight="fill" size={30} />
        </a>
        <a
          data-aos="fade-down"
          title="LinkedIn - Gian"
          href="https://www.linkedin.com/in/gkgian"
          target="_blank"
        >
          <LinkedinLogo weight="fill" size={30} />
        </a>
        <a
          data-aos="fade-up"
          title="Instagram - Gian"
          href="https://instagram.com/gkgian"
          target="_blank"
        >
          <InstagramLogo weight="fill" size={30} />
        </a>
        <a
          data-aos="fade-left"
          title="Gmail - Gian"
          href="mailto:lgian584@gmail.com"
          target="_blank"
        >
          <EnvelopeSimple weight="fill" size={30} />
        </a>
      </div>

      <p>Gian 2023. Todos os direitos reservados.</p>
    </FooterContainer>
  );
}
