import type { NextPage } from "next";
import Welcome from "../components/portfolio/landing";
import Experiences from "../components/portfolio/experiences";
import Skills from "../components/portfolio/skills";
import Projects from "../components/portfolio/projects";
import Contacts from "../components/portfolio/contacts";
import Layout from "../components/portfolio/layout";
import Blogs from "../components/portfolio/blog";
import { getSortedPostsData } from "../lib/blogs";
import Background from "../components/portfolio/layout/background";
import About from "../components/portfolio/about";

const Home: NextPage = ({ allPostsData }: any) => {
  return (
    <Layout>
{/*       <Background />
      <Welcome />
      <About/>
      <Experiences />
      <Skills />
      <Projects />
      <Blogs allPostsData={allPostsData} />
      <Contacts /> */}
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
