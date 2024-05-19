import React, { useState } from "react";
import "./App.css";

function App() {
  const [cnt, setCnt] = useState(0);
  const [arr, setArr] = useState(Array(9).fill(null));
  const [won, setWon] = useState(null);
  const [limit, setLimit] = useState(true);

  function handleChange(c) {
    if (arr[c - 1] === null && !won) {
      const newArr = [...arr];
      newArr[c - 1] = cnt % 2 === 0 ? "X" : "O";
      setArr(newArr);
      setCnt(cnt + 1);
      if (checkWin(newArr)) {
        setWon(newArr[c - 1]);
      } else if (cnt === 8) {
        setLimit(false);
      }
    }
  }

  function checkWin(board) {
    const winningCombinations = [
      [0, 1, 2], // Row 1
      [3, 4, 5], // Row 2
      [6, 7, 8], // Row 3
      [0, 3, 6], // Column 1
      [1, 4, 7], // Column 2
      [2, 5, 8], // Column 3
      [0, 4, 8], // Diagonal 1
      [2, 4, 6], // Diagonal 2
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }
    return false;
  }

  function restartGame() {
    setCnt(0);
    setArr(Array(9).fill(null));
    setWon(null);
    setLimit(true);
  }

  return (
    <div className="container">
      <h1 className="title">Tic Tac Toe</h1>
      {!limit ? (
        <h2 className="title winner">Match Draw</h2>
      ) : (
        won ? <h2 className="title winner">Player {won} Wins!</h2> : <h2 className="title">Current Player: {cnt % 2 === 0 ? "X" : "O"}</h2>
      )}
      <div className="board">
        <div className="row">
          <div className={`cell ${arr[0] === "X" ? "cross" : arr[0] === "O" ? "circle" : ""}`} onClick={() => handleChange(1)}>
            <h1>{arr[0]}</h1>
          </div>
          <div className={`cell ${arr[1] === "X" ? "cross" : arr[1] === "O" ? "circle" : ""}`} onClick={() => handleChange(2)}>
            <h1>{arr[1]}</h1>
          </div>
          <div className={`cell ${arr[2] === "X" ? "cross" : arr[2] === "O" ? "circle" : ""}`} onClick={() => handleChange(3)}>
            <h1>{arr[2]}</h1>
          </div>
        </div>
        <div className="row">
          <div className={`cell ${arr[3] === "X" ? "cross" : arr[3] === "O" ? "circle" : ""}`} onClick={() => handleChange(4)}>
            <h1>{arr[3]}</h1>
          </div>
          <div className={`cell ${arr[4] === "X" ? "cross" : arr[4] === "O" ? "circle" : ""}`} onClick={() => handleChange(5)}>
            <h1>{arr[4]}</h1>
          </div>
          <div className={`cell ${arr[5] === "X" ? "cross" : arr[5] === "O" ? "circle" : ""}`} onClick={() => handleChange(6)}>
            <h1>{arr[5]}</h1>
          </div>
        </div>
        <div className="row">
          <div className={`cell ${arr[6] === "X" ? "cross" : arr[6] === "O" ? "circle" : ""}`} onClick={() => handleChange(7)}>
            <h1>{arr[6]}</h1>
          </div>
          <div className={`cell ${arr[7] === "X" ? "cross" : arr[7] === "O" ? "circle" : ""}`} onClick={() => handleChange(8)}>
            <h1>{arr[7]}</h1>
          </div>
          <div className={`cell ${arr[8] === "X" ? "cross" : arr[8] === "O" ? "circle" : ""}`} onClick={() => handleChange(9)}>
            <h1>{arr[8]}</h1>
          </div>
        </div>
      </div>
      <button className="restart-button" onClick={restartGame}>Restart Game</button>
    </div>
  );
}

export default App;
