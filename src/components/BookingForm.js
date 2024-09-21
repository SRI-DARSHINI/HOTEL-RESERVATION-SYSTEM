import React, { useState } from 'react';
import './BookingForm.css'; // Optional for styling

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roomType: 'single',
    checkInDate: '',
    checkOutDate: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking logic here (e.g., send form data to the backend)
    console.log('Booking Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label>Name:</label>
      <input 
        type="text" 
        name="name" 
        value={formData.name} 
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

      <label>Room Type:</label>
      <select name="roomType" value={formData.roomType} onChange={handleChange}>
        <option value="single">Single</option>
        <option value="double">Double</option>
        <option value="suite">Suite</option>
      </select>

      <label>Check-in Date:</label>
      <input 
        type="date" 
        name="checkInDate" 
        value={formData.checkInDate} 
        onChange={handleChange} 
        required 
      />

      <label>Check-out Date:</label>
      <input 
        type="date" 
        name="checkOutDate" 
        value={formData.checkOutDate} 
        onChange={handleChange} 
        required 
      />

      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
