import business from "../../assets/professionalBusiness.svg";
import img1 from "../../assets/business/feature1.svg";
import img2 from "../../assets/business/feature2.svg";
import img3 from "../../assets/business/feature3.svg";
import img4 from "../../assets/business/feature4.svg";

const businessInfo = [
  {
    title: "Crescimento Empresarial",
    description: "Estrategias para expansão e fortalecimento de negócios.",
    img: img1,
  },
  {
    title: "Pesquisa de Usuários",
    description: "Coleta e análise de dados para entender necessidades.",
    img: img2,
  },
  {
    title: "Solução de Big Data",
    description: "Processamento e análise de grandes volumes de dados.",
    img: img3,
  },
  {
    title: "Design de Produto",
    description:
      "Desenvolvimento de produtos funcionais e atrativos para consumidores.",
    img: img4,
  },
];

export default function Business() {
  return (
    <section className="flex items-center justify-center gap-10 px-80">
      <img src={business} alt="business" />
      <div className=" flex flex-col gap-10">
        <h2 className="text-center text-3xl">
          Explore Nossas Soluções Profissionais de Negócios
        </h2>
        <div className="grid grid-cols-2 gap-10">
          {businessInfo.map((info, key) => (
            <div className="flex gap-4" key={key}>
              <img src={info.img} alt="business" />
              <div>
                <h3 className="text-xl font-bold">{info.title}</h3>
                <p className="text-base font-extralight">{info.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
