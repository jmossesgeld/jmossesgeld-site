import { NextPage } from "next";
import styles from "../styles/About.module.css";
import Layout from "../components/layout";

const About: NextPage = () => {
  return (
    <>
      <div className={styles.about} id="about">
        {/* Story */}
        <div className={styles.aboutTitle}>
          <h2>About Me</h2>
        </div>
        <div>
          <div>
            <img
              src="/images/profile.jpg"
              height={200}
              width={200}
              alt="profile img"
              className={styles.borderCircle}
            />
          </div>
          <div>
            <p>
              <strong>
                I am a self-directed software engineer with a passion for improving business
                processes through developing useful software that can alleviate difficult business
                tasks and increase overall output value.
              </strong>
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
