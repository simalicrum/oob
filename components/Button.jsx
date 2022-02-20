export default function Button({ children }) {
  return (
    <button className="w-full rounded-lg bg-gray-900 py-3 px-6 text-center text-sm text-white hover:bg-gray-700 sm:w-auto">
      {children}
    </button>
  );
}
