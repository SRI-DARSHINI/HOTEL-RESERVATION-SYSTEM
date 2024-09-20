import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';
import './BookingPage.css'; // Add this for styling

const BookingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  
  const handleSearch = () => {
    // Logic to perform the search based on the searchTerm
    console.log('Searching for:', searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="booking-page-container">
     
      
      {/* Search Bar */}
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

      {/* Booking Form */}
      <BookingForm />
    </div>
  );
};

export default BookingPage;
