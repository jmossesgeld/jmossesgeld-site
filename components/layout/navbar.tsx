import Link from "next/link";

const StyledLink: React.FC<any> = ({ children, href, ...props }) => (
  <Link href={href}>
    <a
      className="my-8 text-sm lg:text-xl px-1 mx-1 md:px-8  hover:bg-violet-300 hover:text-white hover:rounded-full transition-all duration-200"
      {...props}
    >
      {children}
    </a>
  </Link>
);

export default function NavBar(): JSX.Element {
  return (
    <nav
      className="fixed flex justify-between items-center w-screen px-2 lg:px-32 backdrop-blur-sm z-10 h-16 pt-4"
      id="#navbar"
    >
      <div className="img">
        <StyledLink
          href="/"
          className="text-2xl font-black rounded-full hover:bg-violet-900 hover:border-violet-900 hover:text-white p-3 border-2 border-violet-200 transition-all duration-200"
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
