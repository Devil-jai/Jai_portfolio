import React, { useState } from 'react';

function PopupBar({ message, type }) {
  const [isOpen, setIsOpen] = useState(true);

  const closeBar = () => {
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className={`popup-bar ${type}`}>
        <p>{message}</p>
        <button onClick={closeBar}>&times;</button>
      </div>
    )
  );
}

export default PopupBar;
