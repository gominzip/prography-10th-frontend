interface TextFieldProps {
  id: string;
  type: string;
  placeholder?: string;
}

function TextField({ id, type, placeholder, ...rest }: TextFieldProps) {
  return (
    <input
      className="field w-full py-2 px-4 text-[14px] bg-blue-50 rounded-md border border-gray-300 focus:outline-none"
      id={id}
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  );
}

export default TextField;
