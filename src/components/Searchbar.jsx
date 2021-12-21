import React from "react";
import { Searchbar } from "./Searcbar.styled";



class SearchBar extends React.Component {
    state = {name: ""};

     handleNameChange = (e) => {
        this.setState({ name: e.currentTarget.value.toLowerCase()});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.trim() === "") {
            return
        }
         this.props.onSubmit(this.state);
         this.setState({ name: "" });
    };

    render() {
        return (
        <Searchbar>
        <form onSubmit={this.handleSubmit}>
        <button type="submit">
        <span>Search</span>
        </button>

        <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleNameChange}
            />
        </form>
        </Searchbar>)
     }
 }

export default SearchBar;