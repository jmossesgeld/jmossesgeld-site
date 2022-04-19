import Image from "next/image";
import { useInView } from "react-intersection-observer";

const BodyText = ({ children, className, ...props }: any) => {
  return (
    <div className={"text-md mt-2 max-w-xl mx-4 " + className} {...props}>
      {children}
    </div>
  );
};

export default function About() {
  const { ref, inView } = useInView({});

  return (
    <div className="flex justify-evenly items-center flex-col h-4/5 mx-auto text-center  bg-indigo-100 pt-24 pb-20">
      <div ref={ref}>
        <BodyText className="italic bg-indigo-100 rounded-xl p-8 flex flex-col items-center ">
          <Image
            src="/images/profile2.jpg"
            height={200}
            width={200}
            alt="profile img"
            className={"rounded-full" + (inView ? " animate-fade-in-left" : " opacity-0")}
            priority
          />
          <p className={"mt-12" + (inView ? " animate-fade-in-right" : " opacity-0")}>
            I am a web developer with a passion for creating value by improving and simplifying
            business processes through building modern tools and software.
          </p>
        </BodyText>
      </div>
    </div>
  );
}
