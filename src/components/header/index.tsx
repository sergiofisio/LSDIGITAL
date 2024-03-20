import logo from "../../assets/logo.svg";
import Nav from "../nav";

export default function Header() {
  return (
    <header className="flex items-end justify-center h-full w-full">
      <div className="flex flex-col items-center justify-center h-full w-1/5">
        <img className="w-32" src={logo} alt="Logo" />
        <h1 className="text-6xl font-madimi">SL Digital</h1>
      </div>
      <div className="flex flex-col items-center justify-around h-full w-4/5">
        <Nav />
      </div>
    </header>
  );
}
