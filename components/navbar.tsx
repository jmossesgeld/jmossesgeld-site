import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className={styles.navbar} id="#navbar">
      <div className={styles.img}>
        <Link href="/">
          <a>
            <Image
              src="/images/profile2.jpg"
              height={50}
              width={50}
              alt="profile img"
              className={styles.borderCircle}
            />
          </a>
        </Link>
      </div>
      <div className={styles.items}>
        <Link href="/about">
          <a>About</a>
        </Link>
        <a href="#">Skills</a>
        <a href="#">Projects</a>
        <a href="#" style={{ border: 0 }}>
          Contact
        </a>
      </div>
    </nav>
  );
}
