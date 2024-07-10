import React, { useState } from 'react';
import Board from './components/Board';
import PlayerControls from './components/PlayerControls';
import WinnerDisplay from './components/WinnerDisplay';
import { createInitialBoard, makeMove, checkForWinner } from './utils/gameUtils';
import { isMoveValid, isGameOver } from './utils/chessRules';
import './App.css';

const App = () => {
  const [board, setBoard] = useState(createInitialBoard());
  const [currentPlayer, setCurrentPlayer] = useState('Player 1 (White)');
  const [winner, setWinner] = useState(null);

  const handleMove = (fromX, fromY, toX, toY) => {
    const playerColor = currentPlayer === 'Player 1 (White)' ? 'white' : 'black';
    const isValid = isMoveValid(board, fromX, fromY, toX, toY, playerColor);

    if (isValid) {
      const newBoard = makeMove(board, fromX, fromY, toX, toY);
      setBoard(newBoard);

      const gameOver = isGameOver(newBoard, playerColor);
      if (gameOver) {
        setWinner(currentPlayer);
      } else {
        const nextPlayer = currentPlayer === 'Player 1 (White)' ? 'Player 2 (Black)' : 'Player 1 (White)';
        setCurrentPlayer(nextPlayer);
      }
    } else {
      alert('Invalid move! Please try again.');
    }
  };

  const handleQuit = () => {
    const nextPlayer = currentPlayer === 'Player 1 (White)' ? 'Player 2 (Black)' : 'Player 1 (White)';
    setWinner(nextPlayer);
  };

  return (
    <div className="app">
      <h1>Anti-Chess</h1>
      <Board board={board} onMove={handleMove} />
      <PlayerControls currentPlayer={currentPlayer} onQuit={handleQuit} />
      {winner && <WinnerDisplay winner={winner} />}
    </div>
  );
};

export default App;
