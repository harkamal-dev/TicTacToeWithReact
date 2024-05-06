import { useState } from "react";
import "./styles.css";
import useBoard from "./useBoard";

export default function App() {
  const { board, isWinner, handleClickCell } = useBoard();

  return (
    <>
      <div className="App">
        {Array(9)
          .fill("")
          .map((item, index) => (
            <button
              key={index}
              id={index}
              className="cell"
              onClick={handleClickCell}
              disabled={board[index] || !!isWinner}
            >
              <p>{board[index]}</p>
            </button>
          ))}
      </div>

      <p>{["X", "O"].includes(isWinner) && `${isWinner} is winner.`}</p>
      <p>{isWinner === "tie" && "Match draw"}</p>
    </>
  );
}
