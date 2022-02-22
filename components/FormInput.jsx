export default function FormInput({ type, id }) {
  return (
    <input
      id={id}
      type={type}
      className="rounded-lg py-3 px-6 text-sm ring-1 ring-gray-900/10 hover:ring-gray-300 focus:outline-none focus:ring-2"
    ></input>
  );
}
