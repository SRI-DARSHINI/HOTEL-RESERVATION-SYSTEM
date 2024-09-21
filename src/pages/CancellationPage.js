import React, { useState } from 'react';
import './CancellationPage.css'; 

const CancellationPage = () => {
  const [formData, setFormData] = useState({
    bookingId: '',
    email: ''
  });

  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle cancellation logic here (e.g., send data to the backend)
    console.log('Cancellation Data:', formData);
  };

  const handleSearch = () => {
    // Logic for handling search
    console.log('Searching for:', searchTerm);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="cancellation-page-container">
      

      {/* Search Bar */}
      <div className="search-container">
        <input 
          type="text" 
          className="search-bar" 
          placeholder="Search..." 
          value={searchTerm} 
          onChange={handleSearchChange} 
        />
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>

      <h2>Cancel Booking</h2>
      <form onSubmit={handleSubmit}>
        <label>Booking ID:</label>
        <input 
          type="text" 
          name="bookingId" 
          value={formData.bookingId} 
          onChange={handleChange} 
          required 
        />

        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />

        <button type="submit">Cancel Booking</button>
      </form>
    </div>
  );
};

export default CancellationPage;
