

const createInitialBoard = () => {
    
    const emptyRow = Array(8).fill(null);
    const piecesRow = (color) => [
      { type: 'rook', color },
      { type: 'knight', color },
      { type: 'bishop', color },
      { type: 'queen', color },
      { type: 'king', color },
      { type: 'bishop', color },
      { type: 'knight', color },
      { type: 'rook', color },
    ];
    const pawnsRow = (color) => Array(8).fill({ type: 'pawn', color });
  
    return [
      piecesRow('black'),
      pawnsRow('black'),
      ...Array(4).fill(emptyRow),
      pawnsRow('white'),
      piecesRow('white'),
    ];
  };
  
  const makeMove = (board, fromX, fromY, toX, toY) => {
    const newBoard = board.map((row) => row.slice());
    newBoard[toX][toY] = newBoard[fromX][fromY];
    newBoard[fromX][fromY] = null;
    return newBoard;
  };
  
  const checkForWinner = (board) => {
    const whitePieces = board.flat().filter(piece => piece && piece.color === 'white').length;
    const blackPieces = board.flat().filter(piece => piece && piece.color === 'black').length;
  
    if (whitePieces === 0) return 'Player 1 (White)';
    if (blackPieces === 0) return 'Player 2 (Black)';
    return null;
  };
  
  export { createInitialBoard, makeMove, checkForWinner };
  