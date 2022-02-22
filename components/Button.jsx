export default function Button({ children, type }) {
  return (
    <button
      type={type}
      className="w-full rounded-lg bg-gray-900 py-3 px-6 text-center text-sm text-white hover:bg-gray-700 sm:w-auto"
    >
      {children}
    </button>
  );
}
