import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Mili" animal="Cat" breed="Persian" />
      <Pet name="Dongki" animal="Dog" breed="Havanese" />
      <Pet name="Maja" animal="Bird" breed="Cockatiel" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
