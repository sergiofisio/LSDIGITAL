import { useState } from "react";
import imgContact from "../../assets/contact/contact.svg";
import Input from "../input";

export default function Contact({
  setModal,
}: {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
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
    <div className="fixed top-0 left-0 w-full h-full bg-gray bg-opacity-50 flex items-center justify-center text-background">
      <button>Limpar</button>
      <div className="flex flex-col items-center justify-evenly w-1/2 h-fit relative bg-white rounded-2xl p-4">
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
