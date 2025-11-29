import { Link } from "react-router-dom";
import RoomList from "../components/RoomList";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Find Your Perfect Room
          </h1>

          <p className="text-lg sm:text-xl mb-8">
            Browse affordable and comfortable rooms for rent near you.
          </p>

          <Link
            to="/rooms"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition"
          >
            View All Rooms
          </Link>

        </div>
      </section>

      {/* Featured Rooms */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold mb-6">Featured Rooms</h2>

        <RoomList limit={3} />

        {/* See More Button */}
        <div className="text-center mt-8">
          <Link
            to="/rooms"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition inline-block"
          >
            See More
          </Link>
        </div>
      </section>
    </div>
  );
}
