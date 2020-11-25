import s from './Gallery.module.css';
import React, {useEffect} from "react";
import Photo from "../MainPage/Photo/Photo";
import {Waypoint} from "react-waypoint";
import Masonry from "react-masonry-css";
import i18next from "i18next";

const Gallery = (props) => {

    useEffect(() => {
        !getStorage('likes') && setStorage('likes', '');
    })

    const getStorage = key => localStorage.getItem(key);
    const setStorage = (key, value) => localStorage.setItem(key, value);

    let query = props.history.location.pathname.replace('/search/', '');

    const onEnter = () => {
        let page = props.page + 1;
        props.setPage(page);
        let isSearch = false;
        if (props.history.location.pathname !== '/') isSearch = true;
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
        <div>
            <div className={s.GalleryContainer}>
                {
                    props.location.pathname.includes('/search') && (
                        (props.language === 'ru')
                            ?
                            <h1>
                                {`
                                ${i18next.t('searchWord')}
                                «${query[0].toUpperCase() + query.slice(1)}»
                                `}
                            </h1>
                            :
                            <h1>
                                {`
                                ${query[0].toUpperCase() + query.slice(1)}
                                ${i18next.t('searchWord')}
                            `}
                            </h1>
                    )
                }
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
                                        < Photo
                                            url={photo.src.large}
                                            downloadUrl={photo.src.original}
                                            isLiked={photo.liked}
                                            photographer={photo.photographer}
                                            photoId={photo.id}
                                            getStorage={getStorage}
                                            setStorage={setStorage}
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
        </div>
    )
}

export default Gallery;