export default function InstrumentDropdown({ value, label, onChange, name }) {
  return (
    <div>
      <label className="block text-gray-300 text-sm mb-2"> {label} </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled>
          Select your instrument
        </option>
        <option value="vocals">Vocals</option>
        <option value="guitar">Guitar</option>
        <option value="piano">Piano</option>
        <option value="ukulele">Ukulele</option>
      </select>
    </div>
  );
}
