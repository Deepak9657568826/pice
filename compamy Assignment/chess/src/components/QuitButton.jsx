import React from 'react';
import '../style/QuitButton.css'; 

const QuitButton = ({ onQuit }) => {
  return (
    <button className="quit-button" onClick={onQuit}>
      Quit
    </button>
  );
};

export default QuitButton;
