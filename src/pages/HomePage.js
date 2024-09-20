import React, { useState } from 'react';
import HotelList from '../components/HotelList';
import './HomePage.css'; // Add this for styling

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Logic to handle the search action
    console.log('Searching for:', searchTerm);
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

      <h1>Welcome to Our Hotel Booking System</h1>
      <HotelList />
    </div>
  );
};

export default HomePage;
