import SkillPanel from "./skillPanel";

const skillSet = [
  {
    category: "Programming Languages",
    skills: ["TypeScript", "JavaScript", "Python", "C#", "VBA"],
  },
  {
    category: "Web Frameworks and Libraries",
    skills: ["React.js", "Next.js", "Redux.js", "Node.js", "Express.js", "Tailwind", "Flask"],
  },
  {
    category: "Cloud Platforms",
    skills: ["Firebase", "Google Cloud Platform", "Heroku", "AWS", "Azure"],
  },
  {
    category: "Databases",
    skills: ["Firestore", "MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    category: "Other Tools",
    skills: [
      "GIT",
      "Github",
      "Figma",
      "Photoshop",
      "HTML",
      "CSS",
      "MS Office",
      "Google/StackOverflow",
    ],
  },
];

export default function Skills() {
  return (
    <div id="skills" className="bg-violet-600 p-5">
      <h1 className="font-black text-4xl py-16 text-center text-pink-50">Technology Stack</h1>
      <div className=" flex justify-center items-center flex-col  ">
        {skillSet.map((data) => (
          <SkillPanel key={data.category} {...data} />
        ))}
      </div>
    </div>
  );
}
