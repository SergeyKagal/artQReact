import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { rotes } from '../data/routes';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isBackButtonDisabled, setBackButtonStatus] = useState(true);

  useEffect(() => {
    if (location.pathname === '/') {
      setBackButtonStatus(true);
    } else {
      setBackButtonStatus(false);
    }
  });

  return (
    <header>
      <button
        onClick={() => {
          navigate(-1);
        }}
        disabled={isBackButtonDisabled}
      >
        Back
      </button>

      <button
        onClick={() => {
          navigate(rotes.SETTINGS);
        }}
      >
        Settings
      </button>
    </header>
  );
}

export default Header;
