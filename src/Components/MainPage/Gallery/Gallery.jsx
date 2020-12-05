import s from "./Gallery.module.css";
import i18next from "i18next";
import Masonry from "react-masonry-css";
import PhotoContainer from "./Photo/PhotoContainer";
import {Waypoint} from "react-waypoint";
import React from "react";
import {PhotoLoader} from "../../Common/Loaders/PhotoLoader/PhotoLoader";

export const Gallery = (props) => {

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
                                breakpointCols={props.breakpointColumnsObj}
                                className={s.galleryGrid}
                                columnClassName={s.galleryGridColumn}
                            >
                                {
                                    props.photos.map((photo, index) => {
                                        const DIV = (
                                            <div key={index}>
                                                < PhotoContainer
                                                    url={photo.src}
                                                    downloadUrl={photo.src.original}
                                                    isLiked={photo.liked}
                                                    photographer={photo.photographer}
                                                    photoId={photo.id}
                                                    photoLoader={PhotoLoader}
                                                    {...props}
                                                />
                                            </div>
                                        )
                                        return (index === props.photos.length - 5)
                                            ? <Waypoint onEnter={props.onEnter}>{DIV}</Waypoint>
                                            : DIV
                                    })
                                }
                            </Masonry>
                        </div>
                        {
                            props.fetching && <PhotoLoader/>
                        }
                    </>
                    : props.fetching && <div className={s.noPhotos}>{i18next.t('noPhotos')}</div>
            }
        </div>
    )
}