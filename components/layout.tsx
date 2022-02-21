import BgVideo from "./bgvideo";
import NavBar from "./navbar";
import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Head>
        <title>John Al Mossesgeld</title>
      </Head>
      <NavBar />
      <BgVideo />
      {children}
    </div>
  );
}
