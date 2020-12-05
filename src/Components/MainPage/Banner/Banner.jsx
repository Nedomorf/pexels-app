import React, {useEffect, useState} from "react";
import s from './Banner.module.css';
import SearchField from "../../Common/SearchField/SearchField";
import {NavLink} from "react-router-dom";
import i18next from "i18next";

const Banner = (props) => {

    const [url, setUrl] = useState('');
    const [photographer, setPhotographer] = useState('');
    const [photographerUrl, setPhotographerUrl] = useState('');

    const getBannerPhoto = () => {
        props.setInitialize(false);
        let photoId = Math.random() * 9999999;
        photoId = Math.round(photoId);
        props.getPhotoAPI(photoId).then(photo => {
            console.log(photo)
            if (photo.src) {
                setUrl(photo.src.landscape);
                setPhotographer(photo.photographer);
                setPhotographerUrl(photo.photographer_url);
                props.setInitialize(true);
            } else getBannerPhoto();
        })
    }

    useEffect(() => {
        getBannerPhoto();
        props.createWord(7, props.language);
    }, [])

    return (
        props.isInitialize &&
        <div className={s.Banner}>
            <div className={s.bannerContent}>
                <h1>{i18next.t('bannerContentText')}</h1>
                <div>
                    <SearchField text={i18next.t('bannerSearchPlaceholder')}/>
                </div>
                <div className={s.ideas}>
                    <span>{i18next.t('ideasText')}</span>
                    {
                        props.shortWords.map((word, index) => {
                            return (
                                <NavLink key={index} className={s.keyWord} to={`/search/${word}`} onClick={() => {
                                    props.setInitialize(false);
                                    props.setPhotosAPI(1, true, word).then(res => {
                                        props.setPhotos(res.photos, true);
                                        props.setPhotos(res.photos, false);
                                        props.setInitialize(true);
                                    });
                                }}>
                                    <p>{word},</p>
                                </NavLink>
                            )
                        })
                    }
                    <p className={s.keyWord}>{i18next.t('moreIdeasText')}</p>
                </div>
            </div>
            {
                (photographer !== '') &&
                <p className={s.photographer}>
                    <a href={photographerUrl} target="_blank">{i18next.t('photographer')}
                        {photographer}
                    </a>
                </p>
            }
            <img src={url} alt=""/>
        </div>
    )
}

export default Banner;