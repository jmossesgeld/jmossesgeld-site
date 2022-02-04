import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/navbar";
import { useState, useEffect } from "react";

const Home: NextPage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <>
      <NavBar />

      {/* Homepage */}
      <div className={styles.home}>
        <div className={`${styles.title} ${visible && styles.visible}`}>
          <h1>Hi! </h1>
          <h1>I am John Al Mossesgeld</h1>
          <h5>SOFTWARE ENGINEER</h5>
        </div>
      </div>

      {/* About */}
      <div className={styles.about} id="about">
        <div className={styles.aboutTitle}>
          <h2>About Me</h2>
        </div>
        <div className={styles.aboutContent}>
          <div className={styles.aboutContentLeft}>
            <div className={styles.aboutContentLeftImg}>
              <Image
                src="/images/profile.jpg"
                height={200}
                width={200}
                alt="profile img"
                className={styles.borderCircle}
              />
            </div>
            <div className={styles.aboutContentLeftText}>
              <p>
                I am a software engineer with a passion for building software that improves the
                lives of others. I have a background in computer science and mathematics, and I am
                currently pursuing a B.S. in Computer Science at the University of Waterloo.
              </p>
              <p>
                I am currently looking for a full-time position as a software engineer. If you are
                interested in working with me, please contact me at{" "}
                <a href="mailto:jmossesgeld@gmail.com"></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
