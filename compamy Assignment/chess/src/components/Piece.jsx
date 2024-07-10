import React from 'react';
import '../style/Piece.css'; 

const Piece = ({ piece, position, onMove }) => {
  const handleMove = () => {
    const [x, y] = position;
    const move = prompt(`Move piece at (${x}, ${y}) to (newX, newY):`);
    const [newX, newY] = move.split(',').map(Number);
    onMove(x, y, newX, newY);
  };

  return (
    <div className={`piece ${piece.color}`} onClick={handleMove}>
      {piece.type}
    </div>
  );
};

export default Piece;
