import s from './App.module.css';
import React, {useEffect, useState} from "react";
import Navbar from "./Components/Navbar/Navbar";
import MainPageContainer from "./Components/MainPage/MainPage.Container";
import {connect} from "react-redux";
import {PageLoader} from "./Components/Common/Loaders/PageLoader/PageLoader";
import {setPhotos} from "./Redux/main-reducer";
import i18next from "i18next";
import {Redirect} from "react-router-dom";

function App(props) {

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

    const [language, setLanguage] = useState('ru');
    const [keyWords, setKeyWords] = useState(keyWordsEn);

    useEffect(() => {
        changeLanguage(language);
    }, [])

    const changeLanguage = lang => {
        i18next.init({
            lng: lang,
            resources: require(`/${lang}.json`)
        });
        setLanguage(lang);
        if (lang === 'ru') {
            setKeyWords(keyWordsRus)
        }else if (lang === 'en') {
            setKeyWords(keyWordsEn)
        }
    }

    return (
        <div className={props.isInitialize && s.App}>

            <Redirect from="/pexels-app" to="/"/>

            {props.isInitialize && <Navbar setPhotos={props.setPhotos} changeLanguage={changeLanguage}/>}
            <MainPageContainer keyWords={keyWords}/>

            {!props.isInitialize && <PageLoader/>}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isInitialize: state.Main.isInitialize
    }
}

const mapDispatchToProps = {setPhotos}

export default connect(mapStateToProps, mapDispatchToProps)(App);

