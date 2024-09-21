import React, { useState } from 'react';
import './Filter.css';

const Filter = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState('');
  const [roomType, setRoomType] = useState('');
  const [hotelType, setHotelType] = useState('');

  const handleFilterChange = () => {
    // Pass the selected filter values to the parent component
    onFilterChange({
      priceRange,
      roomType,
      hotelType,
    });
  };

  return (
    <div className="filter-container">
      <h3>Filters</h3>
      
      <div className="filter-section">
        <label>Price Range:</label>
        <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
          <option value="">All</option>
          <option value="50-100">$50-$100</option>
          <option value="100-200">$100-$200</option>
          <option value="200-300">$200-$300</option>
        </select>
      </div>

      <div className="filter-section">
        <label>Room Type:</label>
        <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
          <option value="">All</option>
          <option value="Deluxe">Deluxe</option>
          <option value="Suite">Suite</option>
          <option value="Family">Family</option>
        </select>
      </div>

      <div className="filter-section">
        <label>Hotel Type:</label>
        <select value={hotelType} onChange={(e) => setHotelType(e.target.value)}>
          <option value="">All</option>
          <option value="Budget">Budget</option>
          <option value="Luxury">Luxury</option>
          <option value="Premium">Premium</option>
        </select>
      </div>

      <button className="filter-button" onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default Filter;
