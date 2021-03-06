import NavBar from "./navbar";
import Head from "next/head";
import Background from "./background";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <title>John Al Mossesgeld</title>
      </Head>
      <NavBar />
      {children}
    </div>
  );
}
