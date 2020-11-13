import React, {useEffect, useState} from "react";
import s from './Banner.module.css';
import {getPhotoAPI} from "../../../api/api";
import {SearchField} from "../../Common/SearchField/SearchField";

const Banner = (props) => {

    const [url, setUrl] = useState('');
    const [photographer, setPhotographer] = useState('');
    const [photographerUrl, setPhotographerUrl] = useState('');

    const getBannerPhoto = () => {
        let photoId = Math.random() * 9999999;
        photoId = Math.round(photoId);
        getPhotoAPI(photoId, true).then(photo => {
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
    }, [])

    return (
        props.isInitialize &&
        <div className={s.Banner}>
            <div className={s.bannerContent}>
                <h1>Лучшие бесплатные стоковые фото и видео от талантливых авторов.</h1>
                <div>
                    <SearchField text={"Ищите бесплатные фото и видео"}/>
                </div>
                <div className={s.ideas}>
                    Идеи для поиска: <p>кофе</p><span>,</span><p>шоколад</p><span>,</span><p>кошки</p>
                </div>
            </div>
            {
                (photographer !== '') &&
                <p className={s.photographer}><a href={photographerUrl} target="_blank">Фотограф: {photographer}</a></p>
            }
            <img src={url} alt=""/>
        </div>
    )
}

export default Banner;