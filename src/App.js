import React, { useState } from "react";
import Game from "./components/Game";
const style = {
  marginLeft: "auto",
  marginRight: "auto",
  borderStyle: "solid",
  width: "30%",
  height:'100vh',
};
function App() {
  const [newGame, setNewGame] = useState(false);
  return (
    <>
      <div style={style} className="game-board">
        <Game />
      </div>
    </>
  );
}

export default App;
