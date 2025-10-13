export default function ButtonMain({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium font-rethink-sans"
    >
      {children}
    </button>
  );
}
