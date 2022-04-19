import { useInView } from "react-intersection-observer";
import SkillItem from "./skillItem";

export default function Skill({ category, skills }: { category: string; skills: string[] }) {
  const { ref, inView } = useInView({});

  return (
    <div
      className={
        "w-full max-w-4xl my-4 border-indigo-100 border-2 p-3 mx-2 rounded-lg shadow-sm shadow-white" +
        (inView ? " odd:animate-fade-in-left even:animate-fade-in-right" : " opacity-0")
      }
      ref={ref}
    >
      <h3 className="font-black text-xl mx-4 my-6 text-pink-100 text-center">{category}</h3>
      <div className="flex flex-wrap justify-center">
        {skills.map((skill) => (
          <SkillItem text={skill} key={skill} />
        ))}
      </div>
    </div>
  );
}
