import type { NextPage } from "next";
import Welcome from "../components/welcome";
import About from "../components/about";
import Certs from "../components/skills";
import Projects from "../components/projects";

const Home: NextPage = () => {
  return (
    <>
      <Welcome />
      <About />
      <Certs />
      <Projects/>
    </>
  );
};

export default Home;
