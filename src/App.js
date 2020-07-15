const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, { name: "Stu", animal: "cat", breed: "stray" }),
    React.createElement(Pet, {
      name: "Frank",
      animal: "Elephant",
      breed: "Asian",
    }),
    React.createElement(Pet, {
      name: "Doris",
      animal: "bird",
      breed: "parrot",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
