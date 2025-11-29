export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h2 className="text-xl font-semibold">RoomFinder</h2>

        <p className="text-gray-400 mt-2">
          Affordable rooms and rentals near you.
        </p>

        <p className="text-gray-500 mt-4 text-sm">
          © {new Date().getFullYear()} RoomFinder • All Rights Reserved
        </p>

      </div>
    </footer>
  );
}
