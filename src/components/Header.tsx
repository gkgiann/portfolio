const Header = () => {
  return (
    <header className="w-full sticky top-0 backdrop-blur-sm bg-gradient-to-r from-slate-950/70 to-violet-950/70 p-4 md:p-6 z-50">
      <nav className="flex justify-end gap-4 md:gap-6 text-sm md:text-lg">
        <a
          className="hover:text-violet-600 transition-colors font-semibold"
          href="#home"
        >
          Início
        </a>
        <a
          className="hover:text-violet-600 transition-colors font-semibold"
          href="#experiences"
        >
          Experiências
        </a>
        <a
          className="hover:text-violet-600 transition-colors font-semibold"
          href="#skills"
        >
          Skills
        </a>
        <a
          className="hover:text-violet-600 transition-colors font-semibold"
          href="#projects"
        >
          Projetos
        </a>
      </nav>
    </header>
  );
};

export default Header;
