import React from "react";
import { Modal, Overlay } from "./Modal.styled";

class ModalWindow extends React.Component {
    

    render() {
        debugger;
        return (
            <Overlay>
                <Modal>
                    <img src={this.props.filteredResults.largeImageURL} alt={this.props.filteredResults.tags} />
                </Modal>
            </Overlay>
        )
    }
}

export default ModalWindow;