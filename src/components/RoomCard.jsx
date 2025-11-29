import { Link } from "react-router-dom";

export default function RoomCard({ room }) {
  return (
    <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white">

      {/* Image */}
      <img
        src={room.image}
        alt={room.title}
        className="w-full h-52 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{room.title}</h3>

        <p className="text-blue-600 font-semibold">{room.price}</p>

        <p className="text-gray-600 text-sm mt-1">
          📍 {room.location}
        </p>

        {/* View button */}
        <Link
          to={`/room/${room.id}`}
          className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          View Details
        </Link>
      </div>

    </div>
  );
}
