import type { NextPage } from "next";
import Welcome from "../components/welcome";
import About from "../components/about";
import Certs from "../components/skills";
import Projects from "../components/projects";
import Contacts from "../components/contacts";

const Home: NextPage = () => {
  return (
    <>
      <Welcome />
      <About />
      <Certs />
      <Projects/>
      <Contacts/>
    </>
  );
};

export default Home;
