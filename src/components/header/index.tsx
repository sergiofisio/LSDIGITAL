import logo from "../../assets/logo.svg";
import Nav from "../nav";

export default function Header() {
  return (
    <header className="flex items-center justify-center h-full w-full p-10 bg-[#000C2F]">
      <div className="flex flex-col items-center justify-center h-full w-1/5 text-white">
        <img className="w-24" src={logo} alt="Logo" />
        <h1 className="text-4xl font-madimi">SL Digital</h1>
      </div>
      <Nav />
    </header>
  );
}
