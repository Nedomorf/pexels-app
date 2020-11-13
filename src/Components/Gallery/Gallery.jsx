import s from './Gallery.module.css';
import React from "react";
import Photo from "../MainPage/Photo/Photo";
import {Waypoint} from "react-waypoint";
import Masonry from "react-masonry-css";

const Gallery = (props) => {

    const onEnter = () => {
        let page = props.page + 1;
        props.setPage(page);
        props.setPhotosAPI(page).then(res => {
            console.log('scroll:', res);
            props.setPhotos(res.photos);
        });
    }

    const breakpointColumnsObj = {
        default: 3,
        1070: 2,
        590: 1
    };

    return (
        <div className={s.GalleryContainer}>
            <div className={s.gallery}>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className={s.galleryGrid}
                    columnClassName={s.galleryGridColumn}
                >
                    {
                        props.photos.map((photo, index) => {
                            return (index === props.photos.length - 5)
                                ? <Waypoint onEnter={onEnter} key={photo.id}>
                                    <div key={photo.id}>
                                        <Photo url={photo.src.large} isLiked={photo.liked}
                                               photographer={photo.photographer}
                                               photoId={photo.id}
                                        />
                                    </div>
                                </Waypoint>
                                : <div key={photo.id}>
                                    <Photo url={photo.src.large} isLiked={photo.liked}
                                           photographer={photo.photographer}
                                           photoId={photo.id}
                                    />
                                </div>
                        })
                    }
                </Masonry>
            </div>
        </div>
    )
}

export default Gallery;