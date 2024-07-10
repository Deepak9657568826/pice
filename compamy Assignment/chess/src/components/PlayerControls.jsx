import React from 'react';
import '../style/PlayerControls.css'; 

const PlayerControls = ({ currentPlayer, onQuit }) => {
  return (
    <div className="player-controls">
      <div className="current-player">
        Current Player: {currentPlayer}
      </div>
      <button className="quit-button" onClick={onQuit}>Quit</button>
    </div>
  );
};

export default PlayerControls;
