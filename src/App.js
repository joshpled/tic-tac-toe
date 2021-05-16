import React, { useState } from "react";
import Game from "./components/Game";
const style = {
  marginTop: '-5em',
}
function App() {
  const [newGame, setNewGame] = useState(false);
  return (
    <div style={style}>
      <Game />
    </div>
  );
}

export default App;
