import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AccountSymbol.css'; // For styling the account symbol

const AccountSymbol = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/account'); // Redirect to the account page
  };

  return (
    <div className="account-symbol" onClick={handleClick}>
      <span role="img" aria-label="account" className="account-icon">
        👤
      </span>
    </div>
  );
};

export default AccountSymbol;
