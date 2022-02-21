import { NextPage } from "next";
import Image from "next/image";
import { CSSProperties } from "styled-components";

const alignLeft: CSSProperties = {
  textAlign: "left",
};

const aboutFront: CSSProperties = {
  margin: "2rem auto",
  height: "80vh",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexDirection: "column",
};

const About: NextPage = () => {
  return (
    <>
      <div
        className="container"
        id="about"
      >
        <div style={aboutFront}>
          <Image
            src="/images/profile2.jpg"
            height={200}
            width={200}
            alt="profile img"
            className="circleImg"
            priority
          />

          <div style={{ marginTop: "2rem" }}>
            <p>
              I am a self-directed software developer with a passion for creating value by improving
              business processes through building useful software that help alleviate difficult
              business tasks.
            </p>
            <p>
              My years of working as a public accountant led me to have a strong understanding of
              how to work in a team, how to deal with clients, and how to work in a fast-paced
              environment.
            </p>
          </div>
        </div>

        <div style={alignLeft}>
          <h1 style={{ textAlign: "center" }}>Work Experience</h1>
          <div>
            <h3>Freelance Software Developer</h3>
            <em>2021-present</em>
            <p>
              Providing web and software solutions for clients. Most recent project was the
              development of a web-based payroll software aimed to greatly reduce complexity of
              payroll preparation. Instead of the tedious timekeeping, computation of overtime,
              tardiness, absences, mandatory deductions, etc., the users, by using the software, can
              reduce their payroll preparation times by 90%.
            </p>
          </div>

          <div>
            <h3>Accounting and Tax Consultant</h3>
            <em>2021-present</em>
            <p>
              Providing solutions for accounting and tax problems of clients. Assignments were
              always delivered on time with zero missed deadlines even on pressurizing time
              constraints. Increased my clients&apos; tax savings by 30%.
            </p>
          </div>

          <div>
            <h3>Senior Auditor/ Accountant</h3>
            <p> NATHANIEL P. COLOBONG AND CO., CPAS</p>
            <em>2017-2021 (4 years)</em>
            <p>
              Primarily responsible for leading and working with teams of auditors and accountants
              in internal and external audit, reporting and presenting findings to client&apos;s top
              management, making recommendations and offering solutions. Managed to improve
              productivity and compliance of my clients by 75% in average.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
