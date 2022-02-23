import React from "react";

function Link(props: { href: string; icon: string }) {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      <i className={`${props.icon} text-4xl text-violet-200 hover:animate-bounce`}></i>
    </a>
  );
}

export default function Contacts() {
  const [copy, setCopy] = React.useState("copy email");
  const onClick = () => {
    navigator.clipboard?.writeText("jmossesgeld@gmail.com");
    setCopy("copied");
    setTimeout(() => {
      setCopy("copy email");
    }, 3000);
  };

  return (
    <div id="contact" className={"bg-violet-600 p-5"}>
      <div className="relative flex flex-col items-center mt-16 mb-12 w-fit mx-auto justify-center group">
        <button
          onClick={onClick}
          className="font-black text-4xl rounded-full text-center py-4 px-8 animate-bounce hover:bg-violet-900  hover:text-pink-50 bg-violet-100 text-violet-800"
        >
          Let&apos;s work together!
        </button>
        <div className="absolute bottom-10 flex-col items-center hidden mb-6 group-hover:flex">
          <span className="relative rounded-full z-10 p-2 text-xs leading-none text-violet-900 whitespace-no-wrap bg-violet-200 shadow-lg">
            {copy}
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center py-4 ">
        <div className="flex space-x-4 items-center">
          <Link href="https://linkedin.com/in/jmossesgeld" icon="fab fa-linkedin" />
          <Link href="https://www.github.com/jmossesgeld/" icon="fab fa-github" />
          <Link href="https://www.facebook.com/miragefallingsky" icon="fab fa-facebook" />
          <Link href="https://www.twitter.com/jmossesgeld" icon="fab fa-twitter" />
          <Link href="mailto:jmossesgeld@gmail.com" icon="fa-solid fa-envelope" />
        </div>
      </div>
      <footer className="py-4">
        <p className="text-center mt-1 text-md text-violet-100">
          Made with <i className="fas fa-heart text-red-500"></i> by{" "}
          <a href="https://jmossesgeld.com" className="text-violet-100 hover:text-violet-500">
            John Al Mossesgeld
          </a>
        </p>
        <p className="text-center mt-1 text-xs text-violet-100">
          Copyright © {new Date().getFullYear()}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
