interface FormInputProps {
  type: string;
  placeholder: string;
  required: boolean;
  errors: string[];
}

export default function FormInput({ type, placeholder, required, errors }: FormInputProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <input
        className="bg-transparent rounded-md w-full h-10 focus:outline-none ring-1 focus:ring-2 ring-neutral-200 focus:ring-cyan-500 border-none placeholder:text-neutral-400 placeholder:p-2 transition"
        type={type}
        placeholder={placeholder}
        required={required}
      />
      {errors.map((error, index) => (
        <span key={index} className="text-red-400 font-medium">
          {error}
        </span>
      ))}
    </div>
  );
}
