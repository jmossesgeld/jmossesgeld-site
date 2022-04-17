import Link from "next/link";
import Date from "../controls/Date";

export interface IBlog {
  id: string;
  title: string;
  date: string;
  content: string;
}

interface AllPostProps {
  allPostsData: {
    summary: string;
    category: string;
    date: string;
    title: string;
    id: string;
  }[];
}

const BlogItem = ({
  id,
  title,
  date,
  summary,
  category,
}: {
  summary: string;
  category: string;
  date: string;
  title: string;
  id: string;
}) => (
  <Link key={id} href={`/blogs/${id}`}>
    <a>
      <div className="border-2 border-indigo-100 shadow-md p-8 flex flex-col gap-4 rounded-xl transition-all hover:bg-indigo-400 hover:text-white  group">
        <div className="bg-purple-300 rounded-md mb-4 font-bold text-white py-1 px-3 self-start">
          {category}
        </div>
        <h1 className="font-bold text-2xl text-indigo-800 group-hover:text-white">{title}</h1>
        <Date dateString={date} />
        <hr />
        <div>{summary}</div>
        <div className="self-end text-indigo-500 group-hover:text-white group-hover:animate-ping">
          ...read more
        </div>
      </div>
    </a>
  </Link>
);

export default function Blogs({ allPostsData }: AllPostProps) {
  return (
    <section className="flex flex-col px-[5%] py-8 bg-indigo-50" id="blog">
      <h1 className="font-black text-4xl py-16 text-center ">My Blog</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
        {allPostsData.map((post) => (
          <BlogItem key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
}
