import React from "react";
import "./App.css";
import SearchBar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import ButtonLoadMore from "./components/Button";

class App extends React.Component {
  state = {
    query: "",
    results: [],
    loadMore: false,
  };

  handleFormSubmit = ({ name }) => {
    this.setState({ query: name });
  };

  handleLoadingUpd = (results) => {
    this.setState({ results });
    this.setState({ loadMore: false });
  };

  handleOnClick = (loadMore) => {
    this.setState({ loadMore });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          query={this.state.query}
          onUpd={this.handleLoadingUpd}
          loadMore={this.state.loadMore}
        />
        {this.state.results.length > 0 && (
          <ButtonLoadMore onClick={this.handleOnClick} />
        )}
      </div>
    );
  }
}

export default App;
