import React from 'react';
import { useParams } from 'react-router-dom';
import './RoomsAvailable.css'; // Create a separate CSS file for styling

const RoomsAvailable = () => {
  const { id } = useParams();

  const roomsData = {
    1: [
      { roomId: 1, roomType: 'Ocean View Deluxe Room', image: 'https://via.placeholder.com/150', rentPerNight: '$150' },
      { roomId: 2, roomType: 'Luxury Suite', image: 'https://via.placeholder.com/150', rentPerNight: '$200' },
      { roomId: 3, roomType: 'Family Room', image: 'https://via.placeholder.com/150', rentPerNight: '$180' }
    ],
    2: [
      { roomId: 1, roomType: 'Standard Double Room', image: 'https://via.placeholder.com/150', rentPerNight: '$80' },
      { roomId: 2, roomType: 'Mountain View Room', image: 'https://via.placeholder.com/150', rentPerNight: '$100' },
      { roomId: 3, roomType: 'Luxury Cabin', image: 'https://via.placeholder.com/150', rentPerNight: '$120' }
    ],
    // Additional hotel data...
  };

  const rooms = roomsData[id] || [];

  return (
    <div className="rooms-available">
      <h2>Rooms Available</h2>
      <div className="room-grid">
        {rooms.map(room => (
          <div className="room-card" key={room.roomId}>
            <img src={room.image} alt={room.roomType} />
            <h3>{room.roomType}</h3>
            <p><strong>Rent Per Night:</strong> {room.rentPerNight}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsAvailable;
