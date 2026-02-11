const Experiences = () => {
  return (
    <section id="experiences" className="min-h-screen w-full mx-auto pt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-violet-600 mb-4 text-center">
        Experiências
      </h2>
      <h3 className="text-xl md:text-2xl font-semibold text-violet-600 mb-2">
        <span className="text-violet-600">Frontend Developer</span> na SUN4
        Softwares
        <span className="text-xs text-violet-100 ml-2">
          Julho 2025 - Presente
        </span>
      </h3>
      <p className="my-4 text-sm md:text-base">
        Atuo no desenvolvimento de aplicações web modernas utilizando{" "}
        <span className="font-semibold text-violet-600">React</span> com{" "}
        <span className="font-semibold text-violet-600">TypeScript</span>,
        focando em performance, escalabilidade e experiência do usuário.
      </p>
      <ul className="list-disc pl-6 space-y-4 text-violet-200 text-sm md:text-base">
        <li>Migração de um sistema NextJS para uma versão React puro com padrões mais definidos e arquitetura sólida.</li>
        <li>
          Organização do projeto em componentes reutilizáveis, hooks
          personalizados, contextos e serviços, garantindo manutenibilidade e
          clareza.
        </li>
        <li>
          Utilização de{" "}
          <span className="font-semibold text-violet-600">Zustand</span> para
          estados globais e{" "}
          <span className="font-semibold text-violet-600">React Hook Form</span>{" "}
          para controle e validação de formulários complexos.
        </li>
        <li>
          Implementação de validações robustas com{" "}
          <span className="font-semibold text-violet-600">Zod</span> e tipagem
          forte com{" "}
          <span className="font-semibold text-violet-600">TypeScript</span>,
          assegurando segurança e previsibilidade.
        </li>
        <li>
          Utilização e customização do{" "}
          <span className="font-semibold text-violet-600">
            Material UI (MUI)
          </span>{" "}
          para criação de interfaces responsivas, acessíveis e alinhadas à
          identidade visual do produto.
        </li>
        <li>
          Consumo de serviços REST utilizando{" "}
          <span className="font-semibold text-violet-600">Axios</span>, com
          tratamento de erros centralizado.
        </li>
        <li>
          Adoção de padrões de código limpo,{" "}
          <span className="font-semibold text-violet-600">ESLint</span>,
          separação de responsabilidades, versionamento com{" "}
          <span className="font-semibold text-violet-600">Git</span> e{" "}
          <span className="font-semibold text-violet-600">GitHub</span>.
        </li>
      </ul>
    </section>
  );
};

export default Experiences;
