import Head from "next/head";
import Date from "../../components/controls/Date";
import { IBlog } from "../../components/portfolio/blog";
import { GetStaticProps, GetStaticPaths } from "next";
import { getAllPostIds, getPostData } from "../../lib/blogs";
import Layout from "../../components/portfolio/layout";
import Link from "next/link";
import Background from "../../components/portfolio/layout/background";

export default function Blog({ blogData }: { blogData: IBlog }) {
  const { title, date, content } = blogData;
  return (
    <Layout>
      <Background />
      <Head>
        <title>{title}</title>
      </Head>
      <div className="mx-[5%] md:mx-[12%] pt-24 gap-4 h-[95vh]">
        <article className="flex flex-col gap-2 bg-white p-[5%] rounded-xl shadow-xl border-2 max-h-full overflow-auto ">
          <h1 className="font-bold text-2xl text-indigo-800 group-hover:text-white">{title}</h1>
          <div className="mb-10 italic">
            <Date dateString={date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <Link href="/#blog">
            <a className="text-indigo-400 animate-pulse self-end">{"<< Return to Blog"}</a>
          </Link>
        </article>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogData = await getPostData(params?.id as string);

  return {
    props: {
      blogData,
    },
  };
};
