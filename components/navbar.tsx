import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <nav className="navbar" id="#navbar">
        <div className="img">
          <Link href="/">
            <a>
              <h1>JM</h1>
            </a>
          </Link>
        </div>
        <div className="items">
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/skills">
            <a>Skills</a>
          </Link>
          <a href="#">Projects</a>
          <a href="#" style={{ border: 0 }}>
            Contact
          </a>
        </div>
      </nav>

      <style jsx>{`
        .navbar {
          max-width: 1200px;
          overflow: hidden;
          width: 100vw;
          position: fixed;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: auto;
          min-height: 2rem;
          z-index: 1;
        }

        .items {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .items a {
          padding: 0 2rem;
          margin: 2rem 2%;
          font-size: 1.4rem;
        }

        @media only screen and (max-width: 800px) {
          .items a {
            padding: 0 0.5rem;
            margin: 0 0.5%;
            font-size: 1rem;
          }
        }

        .items a:hover {
          background-color: #beb7d3;
          color: #fff;
          border-radius: 9999px;
          border: #fff;
          transition: all 0.3s;
        }

        .img {
          padding: 0.5rem;
        }

        .borderCircle {
          border-radius: 9999px;
        }
      `}</style>
    </>
  );
}
