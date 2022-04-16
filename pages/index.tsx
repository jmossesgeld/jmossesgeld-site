import type { NextPage } from "next";
import Welcome from "../components/portfolio/welcome";
import About from "../components/portfolio/experiences";
import Certs from "../components/portfolio/skills";
import Projects from "../components/portfolio/projects";
import Contacts from "../components/portfolio/contacts";
import Layout from "../components/portfolio/layout";
import Blogs from "../components/portfolio/blogs";
import { getSortedPostsData } from "../lib/blogs";

const Home: NextPage = ({ allPostsData }: any) => {
  return (
    <Layout>
      <Welcome />
      <About />
      <Certs />
      <Projects />
      <Blogs allPostsData={allPostsData}/>
      <Contacts />
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  console.log(allPostsData)
  return {
    props: {
      allPostsData,
    },
  };
};
