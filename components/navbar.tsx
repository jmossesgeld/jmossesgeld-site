import styles from "./navbar.module.css";
import Head from "next/head";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className={styles.navbar} id="#navbar">
      <div className={styles.img}>
        <Image
          src="/images/profile2.jpg"
          height={50}
          width={50}
          alt="profile img"
          className={styles.borderCircle}
        />
      </div>
      <div className={styles.items}>
        <a href="#about">About</a>
        <a href="#">Skills</a>
        <a href="#">Projects</a>
        <a href="#" style={{ border: 0 }}>
          Contact
        </a>
      </div>
    </nav>
  );
}
