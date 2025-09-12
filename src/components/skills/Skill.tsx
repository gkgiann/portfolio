import type { IconType } from "react-icons";

interface SkillProps {
  name: string;
  icon: IconType;
}

const Skill = ({ name, icon: Icon }: SkillProps) => {
  return (
    <div className="flex flex-col items-center gap-3 p-4 rounded-lg border-t-2 border-b-2 border-transparent bg-slate-900/50 hover:bg-slate-900/50 transition-all duration-300 hover:scale-125 hover:border-violet-600">
      <Icon size={48} className="text-violet-600" />
      <span className="text-sm font-medium text-center">{name}</span>
    </div>
  );
};
export default Skill;
