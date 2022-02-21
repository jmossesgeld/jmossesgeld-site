import { NextPage } from "next";
import styles from "../styles/About.module.css";
import Layout from "../components/layout";
import Image from "next/image";

const About: NextPage = () => {
  return (
    <>
      <div className="container" id="about">
        {/* Story */}
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
              priority
            />
          </div>
          <div>
            <p>
                I am a self-directed software engineer with a passion for improving business
                processes through developing useful software that can alleviate difficult business
                tasks and increase overall output value.
            </p>
            <p>
              My years of experience as a certified public accountant led me to have a strong
              understanding of how to work in a team, how to deal with clients, and how to work in a
              fast-paced environment.
            </p>
          </div>
        </div>
        {/* Work Experience */}
        <div className={styles.aboutTitle}>
          <h2>Work Experience</h2>
        </div>
      </div>
    </>
  );
};

export default About;
