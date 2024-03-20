import Header from "./components/header";
import site from "./assets/site.png";
import logo from "./assets/logo.jpeg";
import propaganda from "./assets/propaganda.webp";
import banner from "./assets/banner.webp";
import cartao from "./assets/cartaoVisita.jpg";
import Services from "./components/services";

const services = [
  {
    title: "SITE",
    description:
      "Desenvolvemos sites que não apenas parecem incríveis, mas também são otimizados para conversão e usabilidade. Seja um site institucional ou uma loja virtual, criamos a porta de entrada digital para o seu negócio brilhar online.",
    img: site,
  },
  {
    title: " LOGO",
    description:
      "Uma logo memorável é o coração da identidade visual de sua marca. Nossa equipe de design cria logos que capturam a essência do seu negócio e deixam uma impressão duradoura.",
    img: logo,
  },
  {
    title: "PROPAGANDA VIRTUAL",
    description:
      "Navegue pelo mundo do marketing digital com nossas estratégias de propaganda virtual. Aumente seu alcance, engajamento e vendas com campanhas publicitárias direcionadas e eficazes.",
    img: propaganda,
  },
  {
    title: "BANNER",
    description:
      "Chame a atenção onde importa com nossos banners digitais personalizados. Ideal para promoções, eventos ou anúncios, nossos banners são projetados para causar impacto e gerar ação.",
    img: banner,
  },
  {
    title: "CARTÃO DE VISITA",
    description:
      "Seu cartão de visita é uma extensão da sua marca. Oferecemos designs exclusivos e profissionais que garantem que sua primeira impressão seja inesquecível.",
    img: cartao,
  },
];

export default function App() {
  return (
    <section className="min-h-screen w-screen">
      <Header />
      <div
        className="flex flex-col items-center justify-center h-full w-full p-4"
        id="sobre"
      >
        <h2 className="text-3xl font-semibold h-full text-center">
          SL Digital: Conectando você ao futuro, pixel por pixel.
        </h2>
        <p className="text-2xl">
          Na SL Digital, somos apaixonados por conectar inovação e tecnologia
          para criar soluções digitais que impulsionam o sucesso dos nossos
          clientes. Com uma equipe de especialistas dedicados, transformamos
          ideias em realidade e garantimos que você esteja sempre à frente no
          mundo digital.
        </p>
      </div>
      <div
        className="flex flex-col items-center justify-center h-full w-full gap-10"
        id="servicos"
      >
        <h2 className="text-3xl font-semibold h-full text-center">Serviços</h2>
        <div className="flex items-center justify-evenly flex-wrap gap-10">
          {services.map((service, key) => (
            <Services
              key={key}
              img={service.img}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
