import BgVideo from "./bgVideo";
import NavBar from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      <BgVideo />
      {children}
    </div>
  );
}
