import React, { useState } from 'react';
import './AccountPage.css'; // Create this CSS file for styles

const AccountPage = () => {
  const [showDialog, setShowDialog] = useState(false);
  
  // Replace this with actual user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, City, Country',
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log('User logged out');
  };

  return (
    <div className="account-page">
      <h2>User Account</h2>
      <div className="user-details">
        <div className="detail-item">
          <strong>Name:</strong> {user.name}
        </div>
        <div className="detail-item">
          <strong>Email:</strong> {user.email}
        </div>
        <div className="detail-item">
          <strong>Phone:</strong> {user.phone}
        </div>
        <div className="detail-item">
          <strong>Address:</strong> {user.address}
        </div>
      </div>
      <button className="logout-button" onClick={() => setShowDialog(true)}>Logout</button>

      {showDialog && (
        <div className="dialog">
          <p>Are you sure you want to logout?</p>
          <button onClick={handleLogout}>Yes</button>
          <button onClick={() => setShowDialog(false)}>No</button>
        </div>
      )}
    </div>
  );
};

export default AccountPage;
