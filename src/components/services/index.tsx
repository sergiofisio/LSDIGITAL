export default function Services({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center justify-between w-1/4 min-h-96 border-2 border-black border-solid rounded-3xl p-3 shadow-gray shadow-2xl">
      <h2 className="text-2xl font-bold">CRIAÇÃO DE {title}</h2>
      <img className="w-56 rounded-3xl" src={img} alt={`img ${title}`} />
      <div className="flex flex-col items-center">
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
}
