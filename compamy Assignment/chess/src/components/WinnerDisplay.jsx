import React from 'react';
import '../style/WinnerDisplay.css'; 

const WinnerDisplay = ({ winner }) => {
  return (
    <div className="winner-display">
      {winner ? `Winner: ${winner}` : 'No winner yet'}
    </div>
  );
};

export default WinnerDisplay;
