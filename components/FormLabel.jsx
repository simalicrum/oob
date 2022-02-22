export default function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 text-sm text-gray-900">
      {children}
    </label>
  );
}
