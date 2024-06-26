import logo from "../../assets/logo.svg";
import earth from "../../assets/earth.gif";

export default function Banner() {
  return (
    <div className="relative w-full h-full overflow-hidden flex items-end rounded-3xl bg-transparent">
      <div className="w-full h-full relative flex justify-center items-end">
        <img className="h-4/5 rounded-[100%]" src={earth} alt="terra" />
        <img className="absolute h-[70%]" src={logo} alt="logo" />
      </div>
      <div className="absolute top-0 flex flex-col items-center justify-center w-full">
        <h2 className="text-2xl font-title font-black">
          Sua conexão com o mundo Digital está aqui.
        </h2>
      </div>
    </div>
  );
}
