export default function Label({ forVar, children }) {
  return (
    <label for={forVar} className="mb-2 text-sm text-gray-900">
      {children}
    </label>
  );
}
