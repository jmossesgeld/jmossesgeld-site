import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/navbar";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Hi! </h1>
          <h1>I am John Al Mossesgeld</h1>
          <h5>SOFTWARE ENGINEER</h5>
        </div>
        <div className={styles.img}>
          <Image src="/images/profile.jpg" height={144} width={144} alt="profile img" />
        </div>
      </div>
    </>
  );
};

export default Home;
