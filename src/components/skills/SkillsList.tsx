import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiFastify,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Skill from "./Skill";

const SkillsList = () => {
  return (
    <section id="skills" className="min-h-screen w-full pt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-violet-600 mb-12 text-center">
        Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mx-auto">
        <Skill name="Git" icon={SiGit} />
        <Skill name="GitHub" icon={SiGithub} />
        <Skill name="ReactJS" icon={SiReact} />
        <Skill name="Next.js" icon={SiNextdotjs} />
        <Skill name="GitHub" icon={SiGithub} />
        <Skill name="JavaScript" icon={SiJavascript} />
        <Skill name="TypeScript" icon={SiTypescript} />
        <Skill name="HTML5" icon={SiHtml5} />
        <Skill name="CSS3" icon={SiCss3} />
        <Skill name="Tailwind CSS" icon={SiTailwindcss} />
        <Skill name="Sass" icon={SiSass} />
        <Skill name="Node.js" icon={SiNodedotjs} />
        <Skill name="Fastify" icon={SiFastify} />
        <Skill name="Express" icon={SiExpress} />
        <Skill name="NestJS" icon={SiNestjs} />
        <Skill name="Postgres" icon={SiPostgresql} />
        <Skill name="Docker" icon={SiDocker} />
      </div>
    </section>
  );
};

export default SkillsList;
