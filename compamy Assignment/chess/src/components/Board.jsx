import React from 'react';
import Piece from './Piece';
import '../style/Board.css'; 

const Board = ({ board, onMove }) => {
  const renderSquare = (i, j) => {
    const piece = board[i][j];
    return (
      <div key={`${i}-${j}`} className="square">
        {piece && <Piece piece={piece} position={[i, j]} onMove={onMove} />}
      </div>
    );
  };

  return (
    <div className="board">
      {board.map((row, i) => (
        <div key={i} className="board-row">
          {row.map((_, j) => renderSquare(i, j))}
        </div>
      ))}
    </div>
  );
};

export default Board;
