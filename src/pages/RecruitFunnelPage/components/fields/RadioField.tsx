interface RadioFieldProps {
  label: string;
  value: string;
}

function RadioField({ label, value, ...rest }: RadioFieldProps) {
  return (
    <div className="relative flex items-center bg-white px-4 py-3 rounded-md">
      <input className="peer hidden" type="radio" value={value} {...rest} id={value} />
      <label
        className="field absolute left-0 top-0 w-full h-full cursor-pointer rounded-md border border-gray-300 peer-checked:border-blue-500 peer-checked:bg-blue-50"
        htmlFor={value}
      ></label>
      <div className="pointer-events-none z-10 mr-3 h-3 w-3 bg-white rounded-full ring-1 ring-offset-2 ring-gray-500 peer-checked:bg-blue-500 peer-checked:ring-blue-700" />
      <span className="pointer-events-none z-10 text-[14px] peer-checked:text-blue-800">{label}</span>
    </div>
  );
}

export default RadioField;
