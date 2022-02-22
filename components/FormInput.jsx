export default function FormInput({
  type,
  id,
  placeholder,
  name,
  onChange,
  value,
  error,
}) {
  return (
    <input
      id={id}
      type={type}
      className={`rounded-lg py-3 px-6 text-sm ring-1 focus:outline-none focus:ring-2 ${
        error
          ? 'bg-red-100/20 ring-red-500/20 hover:ring-red-300'
          : 'ring-gray-900/10 hover:ring-gray-300'
      }`}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
    ></input>
  );
}
