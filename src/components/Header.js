import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  // For basic styling (optional)
import AccountSymbol from './AccountSymbol'; // Import AccountSymbol

const Header = () => {
  return (
    <header className="taskbar">
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-item">Home</Link>
          </li>
          <li>
            <Link to="/bookings" className="nav-item">Booking</Link>
          </li>
          <li>
            <Link to="/login" className="nav-item">Login</Link>
          </li>
          <li>
            <Link to="/register" className="nav-item">Register</Link>
          </li>
          <li>
            <Link to="/cancellation" className="nav-item">Cancellation</Link>
          </li>
        </ul>
        <AccountSymbol /> {/* Add AccountSymbol component here */}
      </nav>
    </header>
  );
};

export default Header;
