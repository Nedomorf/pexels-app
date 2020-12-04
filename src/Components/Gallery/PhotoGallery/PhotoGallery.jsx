import s from "./PhotoGallery.module.css";
import i18next from "i18next";
import Masonry from "react-masonry-css";
import Photo from "../../MainPage/Photo/Photo";
import {Waypoint} from "react-waypoint";
import photoLoader from "../../Common/Loaders/PhotoLoader/photoLoader.svg";
import React, {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";

export const PhotoGallery = (props) => {

    const [fetching, setFetching] = useState(false);

    // let query = props.history.location.pathname.replace('/search/', '');

    useEffect(() => {
        if (props.history.location.pathname.includes('/search/') && props.query !== '/') {
            props.setPhotos([], true);
            props.setPage(1);
            props.setPhotosAPI(1, true, props.query).then(res => {
                setFetching(true);
                console.log('search:', res);
                props.setPhotos(res.photos, false);
            });
            setFetching(false);
        } else {
            props.history.push('/')
        }
    }, [])

    const onEnter = () => {
        setFetching(true);
        let page = props.page + 1;
        props.setPage(page);
        let isSearch = false;
        if (props.history.location.pathname !== '/') isSearch = true;
        props.setPhotosAPI(page, isSearch, props.query).then(res => {
            console.log('scroll:', res);
            props.setPhotos(res.photos, false);
            setFetching(false);
        });
    }

    const breakpointColumnsObj = {
        default: 3,
        1070: 2,
        590: 1
    };

    return (
        <div className={s.GalleryContainer}>
            {
                props.location.pathname.includes('/search') && (
                    (props.language === 'ru')
                        ?
                        <h1>
                            {`
                                ${i18next.t('searchWord')}
                                «${props.query[0].toUpperCase() + props.query.slice(1)}»
                            `}
                        </h1>
                        :
                        <h1>
                            {`
                                ${props.query[0].toUpperCase() + props.query.slice(1)}
                                ${i18next.t('searchWord')}
                            `}
                        </h1>
                )
            }
            {
                props.photos[0]
                    ?
                    <>
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
                                                    url={photo.src}
                                                    downloadUrl={photo.src.original}
                                                    isLiked={photo.liked}
                                                    photographer={photo.photographer}
                                                    photoId={photo.id}
                                                    photoLoader={photoLoader}
                                                    {...props}
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
                        {
                            fetching && <div className={s.photoLoader}>
                                <object type="image/svg+xml" data={photoLoader}>svg-animation</object>
                            </div>
                        }
                    </>
                    : fetching && <div className={s.noPhotos}>{i18next.t('noPhotos')}</div>
            }
        </div>
    )
}