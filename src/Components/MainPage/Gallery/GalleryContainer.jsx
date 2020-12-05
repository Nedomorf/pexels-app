import React, {useEffect, useState} from "react";
import {Gallery} from "./Gallery";

const GalleryContainer = (props) => {

    const [fetching, setFetching] = useState(false);

    let query = props.history.location.pathname.replace('/search/', '');

    const breakpointColumnsObj = {
        default: 3,
        1070: 2,
        590: 1
    };

    const onEnter = () => {
        setFetching(true);
        let page = props.page + 1;
        props.setPage(page);
        let isSearch = false;
        if (props.history.location.pathname !== '/') isSearch = true;
        props.setPhotosAPI(page, isSearch, query).then(res => {
            console.log('scroll:', res);
            props.setPhotos(res.photos, false);
            setFetching(false);
        });
    }

    useEffect(() => {
        if (props.body) props.body.style.overflowY = 'visible';
        if (props.history.location.pathname.includes('/search/') && query !== '/') {
            props.setPhotos([], true);
            props.setPage(1);
            props.setPhotosAPI(1, true, query).then(res => {
                setFetching(true);
                console.log('search:', res);
                props.setPhotos(res.photos, false);
            });
            setFetching(false);
        } else if (props.history.location.pathname === '/collection') {

        } else {
            props.history.push('/')
        }
    }, [])

    return (
        props.isInitialize &&
        <div className="galleryComponent">
            <Gallery
                {...props}
                onEnter={onEnter}
                fetching={fetching}
                breakpointColumnsObj={breakpointColumnsObj}
                query={query}
            />
        </div>
    )
}

export default GalleryContainer;