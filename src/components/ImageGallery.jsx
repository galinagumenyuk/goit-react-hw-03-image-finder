import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Item from "./ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";

const KEY = '23837167-bf1b53cb947cc958b90463dad';


class ImageGallery extends React.Component {
    state = {
        results: [],
        loading: false
    }
     
    page = 1;

    componentDidUpdate(prevProps, prevState) {
        if (!this.state.loading && (this.props.loadMore || (prevProps.query !== this.props.query))) {
            this.setState({ loading: true });
            if (prevProps.query !== this.props.query) {
                this.setState(prevState => ({
                        results:[]
                }));
                 this.page = 1;
            }
            fetch(`https://pixabay.com/api/?q=${this.props.query}&page=${this.page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
                .then(res => res.json())
                .then(data => data.hits)
                .then(results => {
                    this.setState(prevState => ({
                        results: prevState.results.concat(results)
                    }));
                })
                .finally(() => {
                    this.handleResults();
                    this.setState({ loading: false });
                    this.page += 1;
                });
         }
    }
    
    handleResults = () => {
         this.props.onUpd(this.state.results);
    };

 
    render() {
        return (
            <div>
                {this.state.loading && <Loader
        type="ThreeDots"
        color=" #3f51b5"
        height={100}
        width={100}
        timeout={3000} //3 secs
      /> }
            <Gallery>
                    {this.state.results && this.state.results.map((item) => <Item key={item.id} image={item} onClick={() => this.props.onClick(item.id ) }/>)}
            </Gallery>
            </div>
        )
    }
}
export default ImageGallery;