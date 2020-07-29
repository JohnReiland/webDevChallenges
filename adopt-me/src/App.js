import React from "react";
import { render } from "";
const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    [
      React.createElement(Pet, {
        name: "Harry",
        animal: "Bird",
        breed: "Parakeet",
      }),
      React.createElement(Pet, {
        name: "Elizabeth",
        animal: "Bird",
        breed: "Parakeet",
      }),
      React.createElement(Pet, {
        name: "Gizmo",
        animal: "Rodent",
        breed: "Hampster",
      }),
    ],
  ]);
};

render(React.createElement(App), document.getElementById("root"));
