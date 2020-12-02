import React, {useEffect} from "react";
import {PhotoGallery} from "./PhotoGallery/PhotoGallery";
import {RecommendsGallery} from "./RecommendsGallery/RecommendsGallery";

const Gallery = (props) => {

    useEffect(() => {
        !getStorage('likes') && setStorage('likes', '');
        !getStorage('collection') && setStorage('collection', '');
    })

    const getStorage = key => localStorage.getItem(key);
    const setStorage = (key, value) => localStorage.setItem(key, value);

    let query = props.history.location.pathname.replace('/search/', '');

    return (
        props.isInitialize &&
        <div className="galleryComponent">
            {
                (query === '')
                    ? <RecommendsGallery {...props}/>
                    : <PhotoGallery {...props} getStorage={getStorage} setStorage={setStorage} query={query}/>
            }
        </div>
    )
}

export default Gallery;