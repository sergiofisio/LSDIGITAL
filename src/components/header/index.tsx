import logo from "../../assets/logo.svg";
import Banner from "../banner";
import Nav from "../nav";

export default function Header({ windowHeight }: { windowHeight: number }) {
  return (
    <header className="flex items-end justify-center h-full w-full p-10 bg-[#000C2F] relative">
      <div
        className={`flex flex-col items-center justify-center h-full w-1/5 text-white`}
      >
        <img className="w-24" src={logo} alt="Logo" />
        <h1 className="text-4xl font-madimi">SL Digital</h1>
      </div>
      <div
        className={`absolute top-0 h-[60%] ${
          windowHeight < 900 ? "w-full" : "w-1/3"
        }`}
      >
        <Banner />
      </div>
      <Nav />
    </header>
  );
}
