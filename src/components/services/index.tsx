import Service from "./service";
import site from "../../assets/site.png";
import logo from "../../assets/logo.jpeg";
import propaganda from "../../assets/propaganda.webp";
import banner from "../../assets/banner.webp";
import cartao from "../../assets/cartaoVisita.jpg";
import grown from "../../assets/services/grow.svg";

const services = [
  {
    title: "SITE",
    descriptions: [
      "Desenvolvemos sites que não apenas parecem incríveis, mas também são otimizados para conversão e usabilidade.",
      "Seja um site institucional ou uma loja virtual, criamos a porta de entrada digital para o seu negócio brilhar online.",
    ],
    img: site,
  },
  {
    title: " LOGO",
    descriptions: [
      "Uma logo memorável é o coração da identidade visual de sua marca.",
      "Nossa equipe de design cria logos que capturam a essência do seu negócio e deixam uma impressão duradoura.",
    ],
    img: logo,
  },
  {
    title: "PROPAGANDA VIRTUAL",
    descriptions: [
      "Navegue pelo mundo do marketing digital com nossas estratégias de propaganda virtual.",
      "Aumente seu alcance, engajamento e vendas com campanhas publicitárias direcionadas e eficazes.",
    ],
    img: propaganda,
  },
  {
    title: "BANNER",
    descriptions: [
      "Chame a atenção onde importa com nossos banners digitais personalizados.",
      "Ideal para promoções, eventos ou anúncios, nossos banners são projetados para causar impacto e gerar ação.",
    ],
    img: banner,
  },
  {
    title: "CARTÃO DE VISITA",
    descriptions: [
      "Seu cartão de visita é uma extensão da sua marca.",
      "Oferecemos designs exclusivos e profissionais que garantem que sua primeira impressão seja inesquecível.",
    ],
    img: cartao,
  },
];

export default function Services() {
  return (
    <section
      className="flex flex-col items-center justify-center h-full w-full gap-10 bg-top bg-no-repeat bg-cover py-10"
      id="servicos"
    >
      <h2 className="text-3xl font-semibold h-full text-center">
        Ótimos recursos para impulsionar o crescimento e desenvolvimento
        empresarial.
      </h2>
      <div className="flex items-center justify-center gap-10 w-full">
        <img src={grown} alt="" className="md:w-1/4" />
        <div className="flex flex-col gap-10 items-center justify-center max-w-[30%] md:max-w-full">
          {services.map((service, key) => (
            <Service
              key={key}
              img={service.img}
              title={service.title}
              descriptions={service.descriptions}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
