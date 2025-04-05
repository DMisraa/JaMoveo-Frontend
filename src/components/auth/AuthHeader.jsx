export default function AuthHeader({ title, subTitle, error }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white text-center mb-6">
        {title}
      </h2>
      {subTitle && <p className="text-center text-gray-300 mb-6">{subTitle}</p>}

      {error && (
        <p className="text-red-500 text-sm text-center mb-4">{error}</p>
      )}
    </div>
  );
}
