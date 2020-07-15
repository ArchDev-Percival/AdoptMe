import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>"Adopt Me"</h1>
      <Pet name="Stu" animal="cat" breed="stray" />
      <Pet name="Frank" animal="elephant" breed="asian" />
      <Pet name="Doris" animal="bird" breed="parrot" />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
