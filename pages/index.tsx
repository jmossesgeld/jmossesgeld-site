import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Layout from "../components/layout";

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
          <h5>SOFTWARE ENGINEER | FULL-STACK WEB DEVELOPER</h5>
          <button className={styles.button}>SEE MY PROJECTS</button>
        </div>
      </div>
    </>
  );
};

export default Home;
