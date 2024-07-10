

const isMoveWithinBounds = (x, y) => x >= 0 && x < 8 && y >= 0 && y < 8;

const getPossibleMoves = (piece, board, x, y) => {
  const moves = [];
  const directions = {
    pawn: [[-1, 0], [1, 0]],
    rook: [[0, 1], [1, 0], [0, -1], [-1, 0]],
    knight: [[-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1]],
    bishop: [[-1, 1], [1, 1], [1, -1], [-1, -1]],
    queen: [[0, 1], [1, 0], [0, -1], [-1, 0], [-1, 1], [1, 1], [1, -1], [-1, -1]],
    king: [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]]
  };

  directions[piece.type].forEach(([dx, dy]) => {
    let newX = x + dx;
    let newY = y + dy;
    while (isMoveWithinBounds(newX, newY)) {
      if (board[newX][newY] && board[newX][newY].color !== piece.color) {
        moves.push([newX, newY]);
        break;
      } else if (board[newX][newY]) {
        break;
      } else {
        moves.push([newX, newY]);
      }
      if (['king', 'knight', 'pawn'].includes(piece.type)) break;
      newX += dx;
      newY += dy;
    }
  });

  return moves;
};

const isCaptureMoveMandatory = (board, playerColor) => {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const piece = board[i][j];
      if (piece && piece.color === playerColor) {
        const possibleMoves = getPossibleMoves(piece, board, i, j);
        if (possibleMoves.some(([x, y]) => board[x][y] && board[x][y].color !== playerColor)) {
          return true;
        }
      }
    }
  }
  return false;
};

const isMoveValid = (board, fromX, fromY, toX, toY, playerColor) => {
  const piece = board[fromX][fromY];
  if (!piece || piece.color !== playerColor) return false;

  const possibleMoves = getPossibleMoves(piece, board, fromX, fromY);
  const isCapture = board[toX][toY] && board[toX][toY].color !== playerColor;
  
  if (isCaptureMoveMandatory(board, playerColor)) {
    return isCapture && possibleMoves.some(([x, y]) => x === toX && y === toY);
  }
  
  return possibleMoves.some(([x, y]) => x === toX && y === toY);
};

const isGameOver = (board, playerColor) => {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const piece = board[i][j];
      if (piece && piece.color === playerColor) {
        const possibleMoves = getPossibleMoves(piece, board, i, j);
        if (possibleMoves.length > 0) return false;
      }
    }
  }
  return true;
};

export { isMoveWithinBounds, getPossibleMoves, isCaptureMoveMandatory, isMoveValid, isGameOver };
