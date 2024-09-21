import React, { useState } from 'react';
import HotelList from '../components/HotelList';
import Filter from '../components/Filter';
import './HomePage.css'; // Add this for styling

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    console.log('Filters:', newFilters);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="home-page-container">
      <div className="search-container">
        <input 
          type="text" 
          className="search-bar" 
          placeholder="Search..." 
          value={searchTerm} 
          onChange={handleChange} 
        />
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>

      <div className="content-container">
        <div className="filter-section">
          <Filter onFilterChange={handleFilterChange} />
        </div>
        <div className="hotel-list-section">
          <h1>Welcome to Our Hotel Booking System</h1>
          <HotelList filters={filters} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
