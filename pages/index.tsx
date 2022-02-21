import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Layout from "../components/layout";

const box = { display: "flex", justifyContent: "flex-start", alignItems: "center" };

const Home: NextPage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    // window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Homepage */}
      <div className="home">
        <div className={`title ${visible && "visible"}`}>
          <h1>John Al Mossesgeld</h1>
          <h5>
            SOFTWARE ENGINEER <span>|</span> FULL-STACK WEB DEVELOPER
          </h5>
          <div style={box}>
            <button className="button">SEE MY PROJECTS</button>
            <a href="https://github.com/jmossesgeld" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/jmossesgeld" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .home {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          height: 90vh;
        }

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
      `}</style>
    </>
  );
};

export default Home;
