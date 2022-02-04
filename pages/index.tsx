import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/navbar";
import { useState, useEffect } from "react";
import BgVideo from "../components/bgVideo";

const Home: NextPage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    // window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <BgVideo/>
      {/* Homepage */}
      <div className={styles.home}>
        <div className={`${styles.title} ${visible && styles.visible}`}>
          <h1>John Al Mossesgeld</h1>
          <h5>SOFTWARE ENGINEER | FULL-STACK WEB DEVELOPER</h5>
          <button className={styles.button}>CHECK MY WORK</button>
        </div>
      </div>
    </>
  );
};

export default Home;
