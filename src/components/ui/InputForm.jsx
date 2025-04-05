export default function InputForm({ type, label, username, placeholder, onChange, name }) {
  return (
    <div>
      <label className="block text-gray-300 text-sm mb-2"> {label} </label>
      <input
        type={type}
        value={username}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
