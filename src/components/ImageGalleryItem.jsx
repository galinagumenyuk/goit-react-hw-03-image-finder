import React from "react";

const Item = ({ image }) => {
    return (
        <li>
            <img src={image.webformatURL} alt={image.tags} />
        </li>
    )
 }

export default Item;