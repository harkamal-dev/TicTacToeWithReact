import React, { useState } from "react";

const winnerCases = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];

const useBoard = () => {
  const [isXturn, setIsXturn] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isWinner, setIsWinner] = useState(null);

  const handleClickCell = ({ target: { id } }) => {
    let localBoard = [...board];
    localBoard[parseInt(id)] = isXturn ? "X" : "O";
    setBoard(localBoard);
    let res = getWinner(localBoard, isXturn);
    setIsWinner(res);
    setIsXturn(!isXturn);
  };

  const getWinner = (localBoard, isXturn) => {
    let turns = localBoard.filter(
      isXturn ? (el) => el === "X" : (el) => el === "O"
    ).length;

    if (turns >= 3) {
      let curr = isXturn ? "X" : "O";
      for (let i = 0; i < winnerCases.length; i++) {
        let [first, sec, third] = winnerCases[i];
        if (
          localBoard[first] === curr &&
          localBoard[sec] === curr &&
          localBoard[third] === curr
        ) {
          return curr;
        }
      }
    }

    if (localBoard.filter((el) => el !== "").length === 9) return "Tie";

    return false;
  };

  return {
    board,
    isWinner,
    handleClickCell,
  };
};

export default useBoard;
