export default function ProductCard({ image, name }) {
    return (
      <div className="border rounded shadow p-2">
        <img src={image} alt={name} className="w-full h-40 object-cover rounded" />
        <p className="text-center mt-2">{name}</p>
      </div>
    );
  }
  