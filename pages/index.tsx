import type { NextPage } from "next";
import Welcome from "../components/portfolio/welcome";
import About from "../components/portfolio/experiences";
import Certs from "../components/portfolio/skills";
import Projects from "../components/portfolio/projects";
import Contacts from "../components/portfolio/contacts";
import Layout from "../components/portfolio/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Welcome />
      <About />
      <Certs />
      <Projects />
      <Contacts />
    </Layout>
  );
};

export default Home;
