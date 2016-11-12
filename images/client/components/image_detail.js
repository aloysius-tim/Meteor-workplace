//Create our image list component

//Import react
import React from 'react'
import Image_scores from './image_scores'

//Create our component
const ImageDetail = (props) => {
    return(
        <li className="media list-group-item">
            <div className="media-left">
                <img src={props.image.link} alt=""/>
            </div>
            <div className="media-body">
                <h4 className="media-heading">{props.image.title}</h4>
                <p className="media-object">{props.image.description}</p>
                <Image_scores ups={props.image.ups} downs={props.image.downs}/>
            </div>
        </li>
    );
};

//Export our component
export default ImageDetail;