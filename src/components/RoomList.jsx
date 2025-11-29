import roomsData from "../data/rooms.json";
import RoomCard from "./RoomCard";

export default function RoomList({ limit }) {
  // If "limit" is passed → show only first X rooms
  const roomsToShow = limit ? roomsData.slice(0, limit) : roomsData;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {roomsToShow.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  );
}
