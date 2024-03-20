export default function Input({
  label,
  text,
  placeholder,
  type,
  onChange,
}: {
  label: string;
  text: string;
  placeholder: string;
  type: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-base font-bold text-background" htmlFor={label}>
        {text}
      </label>
      {type !== "textarea" ? (
        <input
          id={label}
          type={type}
          placeholder={placeholder}
          className="border-2 border-black border-solid rounded-3xl p-3 shadow-gray shadow-2xl bg-[#292738] w-full"
          onChange={onChange}
        />
      ) : (
        <textarea
          id={label}
          placeholder={placeholder}
          className="border-2 border-black border-solid rounded-3xl p-3 shadow-gray shadow-2xl bg-[#292738] resize-none"
          rows={5}
          cols={50}
          onChange={onChange}
        />
      )}
    </div>
  );
}
