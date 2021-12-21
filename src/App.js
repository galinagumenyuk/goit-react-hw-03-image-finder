import React from "react";
import "./App.css";
import SearchBar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";

class App extends React.Component {
  state = { name: "" };

  handleFormSubmit = ({ name }) => {
    this.setState({ name });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery name={this.state.name} />
      </div>
    );
  }
}

export default App;
