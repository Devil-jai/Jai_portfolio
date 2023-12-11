import React, { useState } from 'react';
import PopupBar from './PopupBar';

function App() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const showSuccessMessage = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000); // Hide the success message after 5 seconds
  };

  const showErrorMessage = () => {
    setShowError(true);
    setTimeout(() => setShowError(false), 5000); // Hide the error message after 5 seconds
  };

  return (
    <div className="App">
      <button onClick={showSuccessMessage}>Show Success Message</button>
      <button onClick={showErrorMessage}>Show Error Message</button>

      <PopupBar message="Success! This is a success message." type="success" />
      <PopupBar message="Error! Something went wrong." type="error" />
    </div>
  );
}

export default App;
