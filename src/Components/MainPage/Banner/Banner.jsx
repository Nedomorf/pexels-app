import React, {useEffect, useState} from "react";
import s from './Banner.module.css';
import {getPhotoAPI, setPhotosAPI} from "../../../api/api";
import SearchField from "../../Common/SearchField/SearchField";
import {NavLink} from "react-router-dom";
import i18next from "i18next";

const Banner = (props) => {

    const [url, setUrl] = useState('');
    const [photographer, setPhotographer] = useState('');
    const [photographerUrl, setPhotographerUrl] = useState('');

    const keyWordsEn = [
        'dogs', 'cats', 'coffee', 'summer', 'winter', 'autumn', 'spring', 'home', 'baby', 'cars', 'animals',
        'people', 'woman', 'man', 'clothes', 'wedding', 'food', 'new year', 'christmas', 'easter', 'dress',
        'forest', 'sea', 'ocean', 'beach', 'sun', 'space', 'moon', 'sky', 'night', 'grass', 'morning',
        'love', 'glass', 'water', 'fire', 'air', 'earth', 'plants', 'planet', 'color', 'make up', 'light'
    ];
    const keyWordsRus = [
        'собаки', 'коты', 'кофе', 'лето', 'зима', 'осень', 'весна', 'дом', 'ребенок', 'машины', 'животные',
        'люди', 'женщина', 'мужчина', 'одежда', 'свадьба', 'еда', 'новый год', 'рождество', 'пасха', 'платье',
        'лес', 'море', 'океан', 'пляж', 'солнце', 'космос', 'луна', 'небо', 'ночь', 'трава', 'утро',
        'любовь', 'стекло', 'вода', 'огонь', 'воздух', 'земля', 'растения', 'планета', 'цвет', 'макияж', 'свет'
    ];
    const [keyWords, setKeyWords] = useState(keyWordsEn);
    const [shortKeys, setShortKeys] = useState([]);

    const getBannerPhoto = () => {
        props.setInitialize(false);
        let photoId = Math.random() * 9999999;
        photoId = Math.round(photoId);
        // let photoId =  4553561
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
        if (props.language === 'ru') {
            setKeyWords(keyWordsRus);
            console.log('changed')
        } else if (props.language === 'en') {
            setKeyWords(keyWordsEn);
            console.log('changed')
        }
        for (let i = 0; i < 7; i++) {
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
                <h1>{i18next.t('bannerContentText')}</h1>
                <div>
                    <SearchField text={i18next.t('bannerSearchPlaceholder')}/>
                </div>
                <div className={s.ideas}>
                    {i18next.t('ideasText')}
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
                    <NavLink className={s.keyWord} to='/search'><p>{i18next.t('moreIdeasText')}</p></NavLink>
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