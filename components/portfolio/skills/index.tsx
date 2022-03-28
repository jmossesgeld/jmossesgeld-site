import SkillPanel from "./skillPanel";

export default function Skills() {
  return (
    <div id="skills" className={"bg-violet-600 p-5"}>
      <h1 className="font-black text-4xl py-16 text-center text-pink-50">Technology Stack</h1>
      <div className=" flex justify-center items-center flex-col  ">
        <SkillPanel
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
        <SkillPanel
          category="DevOps and Workflow"
          skills={[
            "GIT",
            "Github",
            "Firebase",
            "Heroku",
            "Google Cloud Platform",
            "Serverless Functions",
            "Firestore",
          ]}
        />
        <SkillPanel
          category="Other Frequently Used Tools and Libraries"
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
