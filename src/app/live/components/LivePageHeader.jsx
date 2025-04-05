export default function LivePageHeader({ title, imageUrl }) {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <img
        className="w-2/4 h-auto object-cover mb-4 rounded-lg mx-auto"
        src={imageUrl}
        alt={title}
      />
    </div>
  );
}