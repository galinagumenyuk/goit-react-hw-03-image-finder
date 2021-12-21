import React from "react";
import Item from "./ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";

const KEY = '23837167-bf1b53cb947cc958b90463dad';


class ImageGallery extends React.Component {
    state = {
        image: null
    }
    

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.name !== this.props.name) {
            fetch(`https://pixabay.com/api/?q=${this.props.name}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => res.json())
                .then (data => data.hits)
                .then(image => this.setState({image} ));
         }
     }
    

    render() {
        return (
            <Gallery>
                {this.state.image &&
                    this.state.image.map((item) =>  <Item image={item} />)
                   }
            </Gallery>
        )
    }
}
export default ImageGallery;