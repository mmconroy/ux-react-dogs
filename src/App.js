import React from "react";
import Dog from "./components/Dog";
import Header from "./components/Header";
import "./App.css";
import { render } from "@testing-library/react";

class App extends React.Component {
  state = {
    dogs: [
      {
        name: "Scruffles",
        type: "Chihuahua",
      },
      {
        name: "Snarf",
        type: "Border Collie",
      },
      {
        name: "Wookie",
        type: "English Sheepdog",
      },
    ],
    favoriteDog: "",
  };

  onPickNewFavorite = () => {
    this.setState({ favoriteDog: this.pickNewFavorite() });
  };

  render() {
    return (
      <div className="dogs">
        <Header numDogs={this.state.dogs.length} />
        <h2>My Dogs</h2>
        <div>
          {this.state.dogs.map((dog) => (
            <Dog dog={dog} />
          ))}
        </div>
        <h2>My Favorite dog is {this.state.favoriteDog.name}</h2>
        <button onClick={() => this.pickNewFavorite}>New doggo!</button>
      </div>
    );
  }
}

export default App;
