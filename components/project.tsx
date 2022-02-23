import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface ProjectProps {
  src: string;
  title: string;
  description: string | JSX.Element;
  codeLink: string;
  liveLink: string;
}

const bodyText = "text-md my-4 mx-4 text-justify";
const heading = "font-black text-2xl mx-4 mt-6 ";
const workBox =
  "flex justify-start p-5 my-10 flex-col backdrop-blur-lg border-black-600 border-2 rounded-lg shadow-lg ";
const button =
  "px-8 h-auto my-auto py-2 font-bold rounded-full border-2 border-indigo-200 bg-indigo-100 text-indigo-900 hover:bg-violet-500 hover:text-violet-100 hover:scale-105 transition-all duration-100 ";

export default function Project({
  src,
  title,
  codeLink,
  liveLink,
  description,
}: ProjectProps): JSX.Element {
  const { ref, inView } = useInView({});

  return (
    <div
      className={workBox + (inView ? " animate-fade-in" : " opacity-0")}
      ref={ref}
      style={{ minHeight: "800px", width: "608px" }}
    >
      <div className="relative container border-8 p-2 h-96 border-indigo-300">
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
      <div className={bodyText}>{description}</div>
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
}
