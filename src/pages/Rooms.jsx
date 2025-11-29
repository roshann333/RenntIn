import RoomList from "../components/RoomList";

export default function Rooms() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Available Rooms</h1>
      <RoomList />
    </div>
  );
}
