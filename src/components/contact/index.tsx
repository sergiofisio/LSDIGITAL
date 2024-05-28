import { useState } from "react";
import imgContact from "../../assets/contact/contact.svg";
import Input from "../input";

export default function Contact({
  setModal,
  windowHeight,
}: {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  windowHeight: number;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    phone: "",
    subject: "",
    message: "",
  });

  return (
    <div
      className={`fixed top-0 right-0 flex w-full h-full bg-opacity-50 bg-red z-50 ${
        windowHeight < 900
          ? "overflow-y-auto scrollbar scrollbar-thumb-red scrollbar-track-white justify-center"
          : "justify-center items-center"
      } `}
    >
      <div
        className={`flex flex-col w-3/5 p-5 bg-white rounded-3xl relative drop-shadow-[0_0_20px_#fff] gap-4 h-fit md:min-h-[100%] md:w-full sm:w-full sm:min-h-[50%]`}
      >
        <h2
          onClick={() => setModal(false)}
          className="flex items-center justify-center cursor-pointer absolute top-3 right-4 border-solid border-background border-2 rounded-[100%] w-10 h-10 text-background text-2xl font-bold"
        >
          X
        </h2>
        <h2 className="text-background text-2xl font-bold">
          Pronto para trabalhar juntos em novos projetos?
        </h2>
        <div className="flex items-center justify-between w-full gap-10">
          <img className="w-1/3" src={imgContact} alt="Contato" />
          <form className="flex flex-col gap-3 w-full" action="submit">
            <Input
              label="Nome"
              text="Nome Completo"
              placeholder="Seu nome completo"
              type="text"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <Input
              label="Email"
              text="Email"
              placeholder="Seu email"
              type="email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <Input
              label="Cargo"
              text="Cargo"
              placeholder="Seu cargo"
              type="text"
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            />
            <Input
              label="Telefone"
              text="Telefone"
              placeholder="Seu telefone"
              type="text"
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <Input
              label="Assunto"
              text="Assunto"
              placeholder="Assunto"
              type="text"
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            />
            <Input
              label="Mensagem"
              text="Mensagem"
              placeholder="Mensagem"
              type="textarea"
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <div className="flex items-center justify-center gap-10">
              <button
                type="submit"
                className="w-1/2 h-10 bg-emerald-700 rounded-3xl border-emerald-700 border-solid border-2 transition-all duration-500 ease-in-out hover:bg-white hover:text-emerald-700"
              >
                Enviar
              </button>
              <button
                type="reset"
                className="w-1/2 h-10 bg-red-700 rounded-3xl border-red-700 border-solid border-2 transition-all duration-500 ease-in-out hover:bg-white hover:text-red-700"
              >
                Limpar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
