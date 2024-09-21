import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const HotelDetails = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  // Sample hotel data for details
  const sampleHotels = [
    {
      id: 1,
      name: 'Grand Plaza',
      description: 'A luxury hotel in the heart of the city with all modern amenities.',
    },
    {
      id: 2,
      name: 'Comfort Inn',
      description: 'A budget-friendly hotel offering comfortable stays.',
    },
    {
      id: 3,
      name: 'Oceanview Resort',
      description: 'A beautiful resort located by the ocean with stunning views.',
    },
    {
      id: 4,
      name: 'Mountain Lodge',
      description: 'A cozy lodge situated in the mountains, perfect for a getaway.',
    },
    {
      id: 5,
      name: 'City Center Hotel',
      description: 'An urban hotel located at the city center, ideal for business travelers.',
    }
  ];

  useEffect(() => {
    const hotelDetails = sampleHotels.find(h => h.id === parseInt(id));
    setHotel(hotelDetails);
  }, [id]);

  if (!hotel) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{hotel.name}</h2>
      <p>{hotel.description}</p>
      <Link to={`/book/${hotel.id}`}>Book Now</Link>
    </div>
  );
};

export default HotelDetails;
