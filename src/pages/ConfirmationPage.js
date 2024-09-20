import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import BookingConfirmation from '../components/BookingConfirmation';

const ConfirmationPage = () => {
  return (
    <div>
      {/* Taskbar */}
      <div className="taskbar">
        <Link to="/">Home</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/cancellation">Cancellation</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>

      {/* Booking Confirmation Component */}
      <BookingConfirmation />
    </div>
  );
};

export default ConfirmationPage;
