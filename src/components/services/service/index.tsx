export default function Service({
  img,
  title,
  descriptions,
}: {
  img: string;
  title: string;
  descriptions: string[];
}) {
  return (
    <div className="flex flex-col items-center justify-between border-2 border-black border-solid rounded-3xl p-3 shadow-gray shadow-2xl bg-[#292738]">
      <h2 className="text-2xl font-bold">CRIAÇÃO DE {title}</h2>
      <div className="flex items-center gap-5">
        <img className="w-40 rounded-3xl" src={img} alt={`img ${title}`} />
        <div className="flex flex-col gap-3 prose px-1 text-sm font-extralight">
          {descriptions.map((description, key) => {
            return (
              <p key={key} className="m-0 text-justify">
                {description}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
