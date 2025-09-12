import { SiGithub } from "react-icons/si";

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  githubRepoUrl: string;
}

const Project = ({
  title,
  description,
  imageUrl,
  githubRepoUrl,
}: ProjectProps) => {
  return (
    <div className="bg-slate-900/50 text-violet-600 border-slate-900/50 rounded-xl overflow-hidden transition-all duration-300 hover:bg-violet-950/50 hover:scale-105 hover:border-violet-600 border-b-2">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <a
            href={githubRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-600 hover:text-violet-700 transition-colors"
            aria-label="GitHub"
          >
            <SiGithub size={20} />
          </a>
        </div>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Project;
