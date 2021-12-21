import React from "react";
import "./App.css";
import SearchBar from "./components/Searchbar";

class App extends React.Component {
  state = { name: "" };

  addName = ({ name }) => {
    this.setState({ name: { name } });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.addName}></SearchBar>
      </div>
    );
  }
}

export default App;
