export default function SubmitButton({ label, onClick }) {
  return (
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition duration-300"
      onClick={onClick ? () => onClick() : undefined}
    >
      {label}
    </button>
  );
}
