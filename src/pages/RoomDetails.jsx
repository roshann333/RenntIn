import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import roomsData from "../data/rooms.json";

export default function RoomDetails() {
  const { id } = useParams();
  const room = roomsData.find((r) => r.id === Number(id));

  const [index, setIndex] = useState(0);

  if (!room) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold">Room not found</h2>

        <Link
          to="/rooms"
          className="inline-flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-300 transition mt-4"
        >
          <span className="text-lg">←</span> Back to Rooms
        </Link>
      </div>
    );
  }

  const images = room.images || [room.image];

  const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* Back Button */}
      <Link
        to="/rooms"
        className="inline-flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-300 transition mb-6"
      >
        <span className="text-lg">←</span> Back to Rooms
      </Link>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Image Slider */}
        <div className="relative w-full">
          <img
            src={images[index]}
            alt={room.title}
            className="rounded-lg shadow-lg w-full h-80 object-cover transition-all"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black/60 transition"
              >
                ❮
              </button>

              <button
                onClick={nextImage}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black/60 transition"
              >
                ❯
              </button>

              <div className="flex gap-3 mt-4 justify-center flex-wrap">
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    onClick={() => setIndex(i)}
                    className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 ${
                      i === index ? "border-blue-500" : "border-gray-300"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Room Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{room.title}</h1>

          <p className="text-xl font-semibold text-blue-600 mb-2">
            {room.price}
          </p>

          <p className="text-gray-700 mb-4">📍 {room.location}</p>

          <p className="text-gray-800 mb-6">{room.description}</p>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/+919656209105?text=Hi, I'm interested in your room: ${room.title}`}
            target="_blank"
            className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition w-fit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M20.52 3.48A11.8 11.8 0 0 0 12 0C5.37 0 0 5.37 0 12a11.83 11.83 0 0 0 1.62 5.97L0 24l6.27-1.64A11.9 11.9 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.2-3.48-8.52zM12 22a9.9 9.9 0 0 1-5.06-1.4l-.36-.21L3 21l.61-3.58-.23-.37A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm5.13-7.47c-.28-.14-1.65-.81-1.9-.9-.25-.1-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.24-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.46.1-.18.05-.35-.02-.49-.07-.14-.61-1.47-.83-2-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.49.07-.75.35-.25.28-.98.97-.98 2.36s1 2.74 1.14 2.93c.14.18 1.96 2.99 4.74 4.19 2.79 1.2 2.79.8 3.29.75.5-.05 1.65-.67 1.89-1.32.23-.65.23-1.21.16-1.32-.07-.11-.25-.18-.53-.32z" />
            </svg>

            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
