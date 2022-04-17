import Typewriter from "typewriter-effect";

export default function Welcome() {
  return (
    <section className="flex h-screen justify-center items-start flex-col px-5 md:px-32 space-y-6 transition-all duration-200 ">
      <h1 className="text-6xl font-normal font-sans animate-fade-in-down">John Al Mossesgeld</h1>
      <h5 className="text-sm md:text-2xl animate-fade-in-left">
        <Typewriter
          options={{
            strings: "Full-Stack Web & Software Developer",
            autoStart: true,
            loop: false,
            delay: 70,
          }}
        />
      </h5>
      <div className="flex justify-center align-center animate-fade-in">
        <a
          href="#projects"
          className="px-8 py-4 font-bold rounded-full border-2 border-indigo-200 bg-indigo-100 text-indigo-900 hover:bg-violet-500 hover:text-violet-100 hover:scale-105 transition-all duration-100 hover:after:content-['>>'] hover:after:animate-ping"
        >
          CHECK MY PROJECTS
        </a>

        <a href="https://github.com/jmossesgeld" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github ml-4 mt-2 text-4xl text-violet-400 hover:animate-bounce"></i>
        </a>

        <a href="https://linkedin.com/in/jmossesgeld" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin ml-4 mt-2 text-4xl text-violet-400 hover:animate-bounce"></i>
        </a>
      </div>

      <i className="fa fa-angles-down text-5xl absolute bottom-5 left-1/2 rounded-full text-violet-500 h-12 w-12 animate-bounce"></i>
    </section>
  );
}
