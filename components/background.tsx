import Image from "next/image";

export default function Background() {
  return (
    <>
      {/* <video autoPlay muted loop className="absolute right-0 bottom-0 min-w-full min-h-full opacity-30 -z-10">
        <source src="bgHDVideo.mp4" type="video/mp4" />
      </video> */}
      <div className="absolute -z-10 w-full h-screen overflow-hidden hue-rotate-90 lg:opacity-100">
        <Image src="/bgwallpaper.jpg" alt="background" layout="fill" objectFit="cover" priority/>
      </div>
      {/* <div className="absolute -z-10 w-screen h-screen overflow-hidden bg-gradient-to-bl from-indigo-100 to-indigo-500"></div> */}
    </>
  );
}
