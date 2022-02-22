import Image from "next/image";

const bodyText = "text-md my-4 mx-4 text-justify";
const heading = "font-black text-2xl mx-4 mt-6 ";
const workBox =
  "flex justify-start h-screen max-w-xl p-5 my-10 flex-col backdrop-blur-lg border-black-600 border-2 rounded-lg shadow-lg ";
const button =
  "px-8 h-auto my-auto py-2 font-bold rounded-full border-2 border-indigo-200 bg-indigo-100 text-indigo-900 hover:bg-violet-500 hover:text-violet-100 hover:scale-105 transition-all duration-100 ";

interface ProjectProps {
  src: string;
  title: string;
  description: string | JSX.Element;
  codeLink: string;
  liveLink: string;
}

const Project: React.FC<ProjectProps> = ({ src, title, codeLink, liveLink, description }) => (
  <div className={workBox}>
    <div className="relative border-8 p-2 border-indigo-300" style={{ height: "320px" }}>
      <Image
        src={src}
        alt="project1"
        layout="fill"
        objectFit="cover"
        className="mx-auto"
        objectPosition="center top"
      />
    </div>
    <p className={heading}>{title}</p>
    <p className={bodyText}>{description}</p>
    <div className="h-12 mt-auto flex space-x-2 justify-between text-sm md:text-lg">
      <a href={codeLink} target="_blank" rel="noopener noreferrer" className={button}>
        <i className="fab fa-github mr-2 text-indigo-400"></i> Code
      </a>
      <a href={liveLink} target="_blank" rel="noopener noreferrer" className={button}>
        <i className="fa-solid fa-desktop mr-2 text-pink-400"></i> View Live
      </a>
    </div>
  </div>
);

export default function Projects() {
  return (
    <div id="projects" className="px-2 my-16 md:mx-32 ">
      <h1 className="font-black text-4xl py-16 text-center  ">Projects</h1>
      <div className="flex flex-wrap md:space-x-4 justify-center justify-items-stretch">
        <Project
          src="/images/payroll.gif"
          title="Mage Payroll System"
          description={
            <p>
              A web-based payroll software aimed to greatly reduce complexity of payroll
              preparation.
              <br />
              Instead of the tedious timekeeping, computation of overtime, tardiness, absences,
              mandatory deductions, etc., the users can reduce their payroll preparation times by
              90% by using this software.
            </p>
          }
          codeLink="https://github.com/jmossesgeld/ph-payroll-manager"
          liveLink="https://mage-payroll-system.web.app/"
        />
        <Project
          src="/images/typing.gif"
          title="Online Typing Speed Test"
          description="A web-based typing speed test which allows users to test their typing speed. The users keyboard speed are
          measured based on words per minute (WPM)."
          codeLink="https://github.com/jmossesgeld/react-typing-speed"
          liveLink="http://react-typing-speed.herokuapp.com/"
        />
      </div>
    </div>
  );
}
