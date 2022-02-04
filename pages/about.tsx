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
        <div>
          <div>
            <Image
              src="/images/profile.jpg"
              height={200}
              width={200}
              alt="profile img"
              className={styles.borderCircle}
            />
          </div>
          <div>
            <p>
              I am self-directed software engineer and certified public accountant with a passion
              for improving business processes through developing useful software that will
              alleviate difficult business tasks and increase efficiency and overall output value.
            </p>
            <p>
              I am currently looking for a full-time position as a software engineer. If you are
              interested in working with me, please contact me at
              <a href="mailto:jmossesgeld@gmail.com"> jmossesgeld@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
