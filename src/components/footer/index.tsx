import logo from "../../assets/logo.svg";
import face from "../../assets/footer/face.svg";
import ig from "../../assets/footer/insta.svg";
import twitter from "../../assets/footer/twitter.svg";
import linked from "../../assets/footer/link.svg";

const socials = [
  {
    title: "Facebook",
    img: face,
    url: "https://www.facebook.com/",
  },
  {
    title: "Instagram",
    img: ig,
    url: "https://www.instagram.com/",
  },
  {
    title: "Twitter",
    img: twitter,
    url: "https://twitter.com/",
  },
  {
    title: "Linkedin",
    img: linked,
    url: "https://www.linkedin.com/",
  },
];

export default function Footer({
  setModal,
}: {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <footer className="grid grid-cols-3 py-10 h-96">
      <div className="flex flex-col items-center justify-around">
        <div className="flex flex-col items-center justify-center">
          <img className="w-24" src={logo} alt="Logo" />
          <h2 className="text-4xl font-madimi"> SL Digital</h2>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h2>Nos siga nas redes</h2>
          <div className="flex gap-5">
            {socials.map((social, key) => (
              <a key={key} className="flex items-center" href={social.url}>
                <img
                  className="border-2 border-white border-solid rounded-[100%] w-10 h-10 p-2"
                  src={social.img}
                  alt={social.title}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-16">
        <h2 className="text-2xl font-bold text-center">Contato</h2>
        <div className="flex flex-col items-center h-full gap-3">
          <p>Rua dos loucos, 123 - Bairro dos hospícios</p>
          <p>suportesldigital@gmail.com</p>
          <p>(11) 99999-9999</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={() => setModal(true)}
          className="text-2xl font-bold border-2 border-white border-solid rounded-3xl p-3 transition-all duration-500 ease-in-out hover:text-background hover:bg-white w-80 h-20"
        >
          CONTATO
        </button>
      </div>
    </footer>
  );
}
