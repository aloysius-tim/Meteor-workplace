//Create our image list component

//Import react
import React from 'react'
import ImageDetail from './image_detail'

const IMAGES = [
    {title : 'Pen', url : 'http://dummyimage.com/50x50'},
    {title : 'Pine tree', url : 'http://dummyimage.com/50x50'},
    {title : 'Mug', url : 'http://dummyimage.com/50x50'}
];

//Create our component
const ImageList = (props) => {
    const validImages = props.images.filter(image => !image.is_album)
    const RenderedImages = validImages.map((image) => {
        return <ImageDetail key={image.title} image={image} />
    });

    return(
        <ul className="media-list list-group">
            {RenderedImages}
        </ul>
    );
};

//Export our component
export default ImageList;