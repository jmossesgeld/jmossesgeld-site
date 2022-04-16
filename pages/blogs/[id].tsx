import Head from "next/head";
import Date from "../../components/controls/Date";
import { Blog } from "../../components/portfolio/blogs";
import { GetStaticProps, GetStaticPaths } from "next";
import { getAllPostIds, getPostData } from "../../lib/blogs";
import { ParsedUrlQuery } from "querystring";

export default function Blog({ title, date, content }: Blog) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className="">{title}</h1>
        <div className="">
          <Date dateString={date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </div>
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
