import type { NextPage } from "next";

const box = { display: "flex", justifyContent: "flex-start", alignItems: "center" };

const Home: NextPage = () => {
  return (
    <>
      {/* Homepage */}
      <div className="flex h-screen justify-center items-start flex-col ml-32 space-y-6">
        <h1 className="text-6xl">Hi! I am John Al Mossesgeld</h1>
        <h5 className="text-2xl">
          SOFTWARE ENGINEER <span>|</span> FULL-STACK WEB DEVELOPER
        </h5>
        <div className="flex justify-center align-center">
          <button className="px-8 py-4 rounded-full bg-fuchsia-100 text-indigo-900 transition-all duration-200 hover:bg-indigo-500 hover:text-fuchsia-200">
            SEE MY PROJECTS
          </button>
          <a href="https://github.com/jmossesgeld" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github ml-4 mt-2 text-4xl text-violet-400"></i>
          </a>
          <a href="https://linkedin.com/in/jmossesgeld" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin ml-4 mt-2 text-4xl text-violet-400"></i>
          </a>
        </div>
      </div>

      {/* <style jsx>{`

        .title {
          margin: 5% 1rem;
          font-size: 1.5rem;
          overflow: hidden;
          height: 0;
          opacity: 0;
          font-size: 1.7rem;
        }

        .visible {
          height: auto;
          opacity: 1;
          transition: all 2s ease-in-out;
        }

        .img {
          padding: 2rem;
        }

        .button {
          padding: 1rem 2rem;
          background-color: rgb(201, 201, 248);
          border: 0;
          border-radius: 9999px;
          color: #1b0066;
          cursor: pointer;
        }

        .button:hover {
          background-color: rgb(100, 100, 255);
          color: #ffcafb;
          transition: all 0.2s;
        }

        .title i {
          margin-left: 1rem;
          font-size: 2rem;
          color: #da83fd;
        }

        .home h5 {
          font-weight: 300;
        }

        .home span {
          padding: 0 1rem;
        }

        @keyframes slideInFromLeft {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .title div {
          animation: 2s ease-out 0s 1 slideInFromLeft;
        }
      `}</style> */}
    </>
  );
};

export default Home;
