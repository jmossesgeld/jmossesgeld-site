import type { NextPage } from "next";
import Welcome from "../components/welcome";
import About from "../components/about";
import Skills from "../components/skills";

const Home: NextPage = () => {
  return (
    <>
      <Welcome />
      <About />
      <Skills />
    </>
  );
};

export default Home;
