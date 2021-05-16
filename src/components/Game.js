import React, { useState } from "react";
import { calculateWinner } from "../helpers";
import Board from "./Board";

const parentStyle = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const renderMoves = () => <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>;

  return (
    <div style={parentStyle}>
      <Board squares={board} onClick={handleClick} />
      <div>
        <p>{winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}</p>
        {renderMoves()}
      </div>
    </div>
  );
};

export default Game;
