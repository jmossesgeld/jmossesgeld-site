import styles from "./navbar.module.css";
import Head from "next/head";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Image
        src="/images/profile2.jpg"
        height={50}
        width={50}
        alt="profile img"
        className={styles.borderCircle}
      />

      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li style={{ border: 0 }}>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
