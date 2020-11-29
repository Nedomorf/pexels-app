import React from "react";
import {PhotoGallery} from "./PhotoGallery/PhotoGallery";
import {RecommendsGallery} from "./RecommendsGallery/RecommendsGallery";

const Gallery = (props) => {

    let query = props.history.location.pathname.replace('/search', '');

    return (
        props.isInitialize &&
        <div className="galleryComponent">
            {
                (query === '')
                    ? <RecommendsGallery {...props}/>
                    : <PhotoGallery {...props}/>
            }
        </div>
    )
}

export default Gallery;