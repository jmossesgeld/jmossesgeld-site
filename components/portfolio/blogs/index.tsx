import { getSortedPostsData } from "../../../lib/blogs";
import Date from "../../controls/Date";

export interface Blog {
  title: string;
  date: string;
  content: string;
}

interface AllPostProps {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}

export default function Blogs({ allPostsData }: AllPostProps) {
  return (
    <div>
      {allPostsData.map(({ id, title, date }) => (
        <div key={id}>
          <p>{title}</p>
          <Date dateString={date} />
        </div>
      ))}
    </div>
  );
}


