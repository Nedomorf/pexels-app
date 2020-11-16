import React, {useEffect, useState} from "react";
import s from './Banner.module.css';
import {getPhotoAPI, setPhotosAPI} from "../../../api/api";
import SearchField from "../../Common/SearchField/SearchField";
import {NavLink} from "react-router-dom";

const Banner = (props) => {

    const [url, setUrl] = useState('');
    const [photographer, setPhotographer] = useState('');
    const [photographerUrl, setPhotographerUrl] = useState('');

    let keyWords = ['dogs', 'cats', 'coffee', 'summer', 'winter', 'autumn', 'spring', 'home', 'baby', 'cars'];
    const [shortKeys, setShortKeys] = useState([]);

    const getBannerPhoto = () => {
        props.setInitialize(false);
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
        for (let i = 0; i < 4; i++) {
            const word = keyWords[Math.floor(Math.random() * keyWords.length)];
            keyWords.splice(keyWords.indexOf(word), 1);
            let arr = shortKeys;
            arr.push(word);
            setShortKeys(arr);
        }
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
                    Идеи для поиска:
                    {/*<p>кофе</p><span>,</span><p>шоколад</p><span>,</span><p>кошки</p>*/}
                    {
                        shortKeys.map(word => {
                            return (
                                <NavLink className={s.keyWord} to={`/search/${word}`} onClick={() => {
                                    setPhotosAPI(1, true, word).then(res => {
                                        props.setPhotos(res.photos, true);
                                        props.setPhotos(res.photos, false);
                                    });
                                }}>
                                    <p>{word},</p>
                                </NavLink>
                            )
                        })
                    }
                    <NavLink className={s.keyWord} to='/search'><p>больше</p></NavLink>
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