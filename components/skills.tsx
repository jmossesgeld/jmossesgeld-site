import { useInView } from "react-intersection-observer";

const bodyText =
  "m-2 text-pink-100 bg-violet-800 inline border-2 border-pink-200 hover:border-violet-900 rounded-full p-3 hover:bg-indigo-200 hover:text-violet-900 hover:scale-110 transition-all duration-100";
const heading = "font-black text-xl mx-4 my-6 text-pink-100 text-center";
const workBox =
  "w-full max-w-4xl my-4 border-indigo-100 border-2 p-3 mx-2 rounded-lg shadow-sm shadow-white";

function Skill({ category, skills }: { category: string; skills: string[] }) {
  const { ref, inView } = useInView({});

  return (
    <div className={workBox + (inView ? " odd:animate-fade-in-left even:animate-fade-in-right" : " opacity-0")} ref={ref}>
      <h3 className={heading}>{category}</h3>
      <div className="flex flex-wrap justify-center">
        {skills.map((skill) => (
          <div className={bodyText} key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div id="skills" className={"bg-violet-600 p-5"}>
      <h1 className="font-black text-4xl py-16 text-center text-pink-50">Technology Stack</h1>
      <div className=" flex justify-center items-center flex-col  ">
        <Skill
          category="Web Development"
          skills={[
            "React.js",
            "Next.js",
            "TypeScript",
            "Material UI",
            "Tailwind CSS",
            "Redux.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "HTML5",
            "CSS3",
            "Javascript",
            "Python",
            "Flask",
          ]}
        />
        <Skill
          category="DevOps and Workflow"
          skills={[
            "GIT",
            "Github",
            "Firebase",
            "Heroku",
            "Google Cloud Platform",
            "Serveless Functions",
            "Firestore",
          ]}
        />
        <Skill
          category="Tools and Libraries"
          skills={[
            "smtp",
            "OpenCV",
            "selenium",
            "beautifulsoup",
            "Sheet.js",
            "openpyxl",
            "pandas",
            "jupyter notebook",
            "jspdf",
            "html2canvas",
          ]}
        />
      </div>
    </div>
  );
}
