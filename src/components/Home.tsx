import { FiDownload } from "react-icons/fi";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

import gianCV from "../assets/gianCV.pdf";

const Home = () => {
  return (
    <section
      id="home"
      className="flex md:grid md:grid-cols-2 gap-6 min-h-screen items-start justify-center pt-32"
    >
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold">
            Oi, eu sou o{" "}
            <span className="inline-block text-violet-600 transition-transform duration-300 hover:scale-250 hover:rotate-360  hover:translate-x-22 hover:font-bold">
              Gian
            </span>
          </h1>

          <h2 className="text-2xl md:text-4xl text-violet-600">
            Desenvolvedor Web
          </h2>
        </div>
        <p className="text-wrap md:text-xl">
          Apaixonado por tecnologia, cursando Ciência da Computação (UEPB),
          <br /> focado em construir soluções digitais eficientes e escaláveis
          <br /> dentro do ecossistema{" "}
          <span className="text-violet-600 font-bold">ReactJS</span>,{" "}
          <span className="text-violet-600 font-bold">NodeJS</span> e{" "}
          <span className="text-violet-600 font-bold">TypeScript</span>.
        </p>

        <a
          download
          href={gianCV}
          target="_blank"
          className="bg-violet-600 text-white w-fit py-2 px-4 rounded hover:bg-violet-700 transition-colors cursor-pointer flex items-center gap-2"
        >
          <FiDownload size={18} />
          Baixar CV
        </a>
        <div className="flex gap-6 mt-2">
          <a
            href="https://github.com/gkgiann"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-600 transition-colors"
            aria-label="GitHub"
          >
            <SiGithub size={24} />
          </a>
          <a
            href="mailto:lgian584@gmail.com"
            className="hover:text-violet-600 transition-colors"
            aria-label="E-mail"
          >
            <SiGmail size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/gkgian/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-600 transition-colors"
            aria-label="LinkedIn"
          >
            <SiLinkedin size={24} />
          </a>
        </div>
      </div>
      <div className="hidden md:flex">
        <img
          className="rounded-full"
          src="https://github.com/gkgiann.png"
          alt="Foto de Gian"
        />
      </div>
    </section>
  );
};

export default Home;
