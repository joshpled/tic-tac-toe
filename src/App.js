import React from "react";
import Game from "./components/Game";
import { Container } from "react-bootstrap";

const style = {
  height: '100vh'
};

const App = () => (
  <Container style={style} className="d-flex align-items-center" >
    <Game />
  </Container>
);

export default App;
