import s from './Gallery.module.css';
import React from "react";
import Photo from "../MainPage/Photo/Photo";
import {Waypoint} from "react-waypoint";
import Masonry from "react-masonry-css";

const Gallery = (props) => {

    const onEnter = () => {
        let page = props.page + 1;
        props.setPage(page);
        let isSearch = false;
        if (props.history.location.pathname !== '/') isSearch = true;
        let query = props.history.location.pathname.replace('/search/', '');
        props.setPhotosAPI(page, isSearch, query).then(res => {
            console.log('scroll:', res);
            props.setPhotos(res.photos, false);
        });
    }

    const breakpointColumnsObj = {
        default: 3,
        1070: 2,
        590: 1
    };

    return (
        props.isInitialize &&
        <div className={s.GalleryContainer}>
            <div className={s.gallery}>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className={s.galleryGrid}
                    columnClassName={s.galleryGridColumn}
                >
                    {
                        props.photos.map((photo, index) => {
                            const DIV = (
                                <div key={index}>
                                    <Photo url={photo.src.large} isLiked={photo.liked}
                                           photographer={photo.photographer}
                                           photoId={photo.id}
                                    />
                                </div>
                            )
                            return (index === props.photos.length - 5)
                                ? <Waypoint onEnter={onEnter}>{DIV}</Waypoint>
                                : DIV
                        })
                    }
                </Masonry>
            </div>
        </div>
    )
}

export default Gallery;