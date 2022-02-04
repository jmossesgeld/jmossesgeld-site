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
      <div className={styles.home}>
        <div className={`${styles.title} ${visible && styles.visible}`}>
          <h1>John Al Mossesgeld</h1>
          <h5>SOFTWARE ENGINEER <span>|</span> FULL-STACK WEB DEVELOPER</h5>
          <div style={box}>
            <button className={styles.button}>SEE MY PROJECTS</button>
            <a href="https://github.com/jmossesgeld" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/jmossesgeld" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
