import { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/About.module.css";
import Layout from "../components/layout";

const About: NextPage = () => {
  return (
    <>
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
                A software developer with a passion for building software that improves business
                processes and the lives of others. Also a certified public accountant who helps
                businesses grow by providing management accounting and financial reporting services.
              </p>
              <p>
                I am currently looking for a full-time position as a software engineer. If you are
                interested in working with me, please contact me at
                <a href="mailto:jmossesgeld@gmail.com"> jmossesgeld@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
