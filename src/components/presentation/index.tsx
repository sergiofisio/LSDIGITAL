import bg1 from "../../assets/bg1.svg";
import presentation from "../../assets/presentation/img.svg";

export default function Presetation() {
  return (
    <section
      className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-b from-[#000C2F] to-background bg-cover bg-no-repeat"
      id="sobre"
    >
      <div
        style={{ backgroundImage: `url(${bg1})` }}
        className="flex items-center justify-center h-full w-full p-20 bg-center bg-no-repeat"
      >
        <div className="">
          <h2 className="text-3xl font-semibold h-full text-center md:text-xl sm:text-base">
            SL Digital: Conectando você ao futuro, pixel por pixel.
          </h2>
          <p className="text-2xl md:text-xl sm:text-base">
            Na SL Digital, somos apaixonados por conectar inovação e tecnologia
            para criar soluções digitais que impulsionam o sucesso dos nossos
            clientes. Com uma equipe de especialistas dedicados, transformamos
            ideias em realidade e garantimos que você esteja sempre à frente no
            mundo digital.
          </p>
        </div>
        <img className="md:w-1/2" src={presentation} alt="" />
      </div>
    </section>
  );
}
