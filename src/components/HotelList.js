import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HotelList.css';

const HotelList = () => {
  const [filterType, setFilterType] = useState(''); // Filter by hotel type
  const [maxRent, setMaxRent] = useState(''); // Filter by maximum rent

  // Sample data for hotels
  const hotels = [
    {
      id: 1,
      name: 'Hotel Sunrise',
      image: 'https://via.placeholder.com/150',
      roomDetails: 'Deluxe Room',
      rentPerDay: 120,
      type: 'Luxury',
      address: '123 Beach Road, Miami'
    },
    {
      id: 2,
      name: 'Mountain Retreat',
      image: 'https://via.placeholder.com/150',
      roomDetails: 'Standard Room',
      rentPerDay: 90,
      type: 'Budget',
      address: '456 Mountain Lane, Denver'
    },
    {
      id: 3,
      name: 'City Center Inn',
      image: 'https://via.placeholder.com/150',
      roomDetails: 'Suite',
      rentPerDay: 150,
      type: 'Premium',
      address: '789 Downtown Ave, New York'
    },
    {
      id: 4,
      name: 'Cozy Cottage',
      image: 'https://via.placeholder.com/150',
      roomDetails: 'Family Room',
      rentPerDay: 100,
      type: 'Family',
      address: '321 Country Rd, Nashville'
    },
    {
      id: 5,
      name: 'Seaside Resort',
      image: 'https://via.placeholder.com/150',
      roomDetails: 'Ocean View Room',
      rentPerDay: 180,
      type: 'Luxury',
      address: '654 Shore Blvd, California'
    },
    {
      id: 6,
      name: 'Budget Stay',
      image: 'https://via.placeholder.com/150',
      roomDetails: 'Single Room',
      rentPerDay: 50,
      type: 'Budget',
      address: '987 Simple St, Texas'
    },
    {
      id: 7,
      name: 'Modern Loft',
      image: 'https://via.placeholder.com/150',
      roomDetails: 'Studio Apartment',
      rentPerDay: 200,
      type: 'Premium',
      address: '123 Trendy Ave, Chicago'
    },
    {
      id: 8,
      name: 'Historic Hotel',
      image: 'https://via.placeholder.com/150',
      roomDetails: 'Queen Room',
      rentPerDay: 130,
      type: 'Luxury',
      address: '456 Heritage St, Boston'
    },
    {
      id: 9,
      name: 'Countryside Inn',
      image: 'https://via.placeholder.com/150',
      roomDetails: 'Twin Room',
      rentPerDay: 80,
      type: 'Budget',
      address: '789 Country Lane, Atlanta'
    },
    {
      id: 10,
      name: 'Luxury Heights',
      image: 'https://via.placeholder.com/150',
      roomDetails: 'Penthouse',
      rentPerDay: 300,
      type: 'Luxury',
      address: '321 Skyline Dr, San Francisco'
    },
  ];

  // Filtered hotels based on filterType and maxRent
  const filteredHotels = hotels.filter((hotel) => {
    const isTypeMatch = filterType ? hotel.type === filterType : true;
    const isRentMatch = maxRent ? hotel.rentPerDay <= maxRent : true;
    return isTypeMatch && isRentMatch;
  });

  // Handle filter change for hotel type
  const handleFilterTypeChange = (e) => {
    setFilterType(e.target.value);
  };

  // Handle filter change for max rent
  const handleMaxRentChange = (e) => {
    setMaxRent(Number(e.target.value));
  };

  return (
    <div className="hotel-list">
      <h2>Available Hotels</h2>

      {/* Filters */}
      <div className="filter-section">
        <label>
          Hotel Type:
          <select value={filterType} onChange={handleFilterTypeChange}>
            <option value="">All</option>
            <option value="Luxury">Luxury</option>
            <option value="Budget">Budget</option>
            <option value="Premium">Premium</option>
            <option value="Family">Family</option>
          </select>
        </label>

        <label>
          Max Rent Per Day:
          <input
            type="number"
            placeholder="Enter max rent"
            value={maxRent}
            onChange={handleMaxRentChange}
          />
        </label>
      </div>

      {/* Hotel Grid */}
      <div className="hotel-grid">
        {filteredHotels.map((hotel) => (
          <div className="hotel-card" key={hotel.id}>
            <img src={hotel.image} alt={hotel.name} />
            <h3>{hotel.name}</h3>
            <p><strong>Room Details:</strong> {hotel.roomDetails}</p>
            <p><strong>Rent Per Day:</strong> ${hotel.rentPerDay}</p>
            <p><strong>Type:</strong> {hotel.type}</p>
            <p><strong>Address:</strong> {hotel.address}</p>
            <Link to={`/hotel/${hotel.id}/rooms`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelList;
