interface FieldSetProps {
  legend: string;
  description?: string;
  children: React.ReactNode;
  warningText?: string;
}

function FieldSet({ legend, description, warningText, children }: FieldSetProps) {
  return (
    <fieldset className="p-6 rounded-xl border border-gray-300 bg-white">
      {description && <p className="mb-3 text-sm font-semibold text-gray-700 whitespace-pre-line">{description}</p>}

      <legend className="px-2 mb-2 text-sm font-semibold text-gray-700 required">{legend}</legend>

      <div className="space-y-2">{children}</div>

      {warningText && <p className="h-2 mt-1 text-xs text-red-500">{warningText}</p>}
    </fieldset>
  );
}

export default FieldSet;
