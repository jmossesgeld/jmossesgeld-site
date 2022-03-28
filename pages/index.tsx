import type { NextPage } from "next";
import Welcome from "../components/portfolio/welcome";
import About from "../components/portfolio/experiences";
import Certs from "../components/portfolio/skills";
import Projects from "../components/portfolio/projects";
import Contacts from "../components/portfolio/contacts";

const Home: NextPage = () => {
  return (
    <>
      <Welcome />
      <About />
      <Certs />
      <Projects />
      <Contacts />
    </>
  );
};

export default Home;
