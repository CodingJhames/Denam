
const Pet = (props) => {
    return React.createElement("div",{},[
        React.createElement("h1",{}, props.name ),
        React.createElement("h2",{}, props.animal ),
        React.createElement("h2",{}, props.breed ),
    ]);
}

const App = () => {
    return React.createElement(
      "div",
    {},
        [ 
            React.createElement("h1",{}, "Adopte me"),
            React.createElement(Pet, {
                animal: "Dog",
                name:"Luna",
                breed: "Havanese"
            }  ),
            React.createElement(Pet, {
                animal: "Bird",
                name:"Pepper",
                breed: "Cocktail"
            }  ),
            React.createElement(Pet, {
                animal: "Cat",
                name:"Doink",
                breed: "Mixed"
            }  ),
        ]
    )
  };

  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(React.createElement(App));