import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-violet-900/50 pt-12 pb-8 flex flex-col items-center gap-4">
      <div className="flex gap-6 mb-2">
        <a
          href="https://github.com/gkgiann"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-600 transition-colors"
          aria-label="GitHub"
        >
          <SiGithub size={28} />
        </a>
        <a
          href="mailto:lgian584@gmail.com"
          className="hover:text-violet-600 transition-colors"
          aria-label="E-mail"
        >
          <SiGmail size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/gkgian/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-600 transition-colors"
          aria-label="LinkedIn"
        >
          <SiLinkedin size={28} />
        </a>
      </div>
      <span className="text-sm">
        &copy; {new Date().getFullYear()} Gian. Todos os direitos reservados.
      </span>
    </footer>
  );
};

export default Footer;
