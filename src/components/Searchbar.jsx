// const KEY = '23837167-bf1b53cb947cc958b90463dad';

// const URL = 'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';

import React from "react";
import { Searchbar } from "./Searcbar.styled";



class SearchBar extends React.Component {
    state = {name: ""};

     handleNameChange = (e) => {
        this.setState({ name: e.currentTarget.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
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