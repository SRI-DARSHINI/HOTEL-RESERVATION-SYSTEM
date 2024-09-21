import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CancellationPage from './pages/CancellationPage';
import AccountPage from './pages/AccountPage'; 
import RoomsAvailable from './pages/RoomsAvailable'; 

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bookings" element={<BookingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cancellation" element={<CancellationPage />} />
        <Route path="/account" element={<AccountPage />} /> {/* Add User Account route */}
        <Route path="/hotel/:id/rooms" element={<RoomsAvailable />} /> {/* Add RoomsAvailable route */}
      </Routes>
    </Router>
  );
};

export default App;
