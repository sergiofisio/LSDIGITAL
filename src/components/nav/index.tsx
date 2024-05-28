const nav = [
  { name: "Home", link: "/" },
  { name: "Sobre", link: "#sobre" },
  { name: "Serviços", link: "#servicos" },
  { name: "Quem somos", link: "#quem" },
  { name: "Contato", link: "#contato" },
];

export default function Nav() {
  return (
    <nav className="flex items-center justify-evenly gap-4 min-h-full w-full">
      {nav.map((item, key) => (
        <a
          key={key}
          className="text-2xl transition-all duration-500 ease-in-out hover:underline hover:font-bold md:text-xl sm:text-base"
          href={item.link}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}
