import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";

const StyledLink: React.FC<any> = ({ children, href, ...props }) => (
  <Link href={href}>
    <a
      className="my-8 text-sm md:text-xl px-1 mx-1 md:px-8  hover:bg-violet-300 hover:text-white hover:rounded-full transition-all duration-200"
      {...props}
    >
      {children}
    </a>
  </Link>
);

export default function NavBar(): JSX.Element {
  return (
    <nav
      className="fixed flex justify-between items-center w-screen px-2 md:px-32 backdrop-blur-sm z-10 h-16"
      id="#navbar"
    >
      <div className="img">
        <StyledLink
          href="/"
          className="text-2xl font-black rounded-full hover:bg-violet-900 hover:border-violet-900 hover:text-white p-3 border-2 border-violet-100 transition-all duration-200"
        >
          JM
        </StyledLink>
      </div>
      <div className="flex justify-end items-center">
        <StyledLink href="#about">About</StyledLink>
        <StyledLink href="#skills">Skills</StyledLink>
        <StyledLink href="#projects">Projects</StyledLink>
        <StyledLink href="#contact">Contact</StyledLink>
      </div>
    </nav>
  );
}
