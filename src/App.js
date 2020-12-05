import s from './App.module.css';
import React, {useEffect, useState} from "react";
import Navbar from "./Components/Navbar/Navbar";
import MainPage from "./Components/MainPage/MainPage";
import {connect} from "react-redux";
import {PageLoader} from "./Components/Common/Loaders/PageLoader/PageLoader";
import {setInitialize, setPhotos} from "./Redux/main-reducer";
import i18next from "i18next";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

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
    const [shortWords, setShortWords] = useState([]);
    const [page, setPage] = useState(1);
    const [body, setBody] = useState();

    let words = [];
    let str = '';
    let i = 0;
    let keysWords = [];
    const createWord = (count, lang) => {
        if (lang === 'ru') {
            keysWords = keyWordsRus;
        } else if (lang === 'en') {
            keysWords = keyWordsEn;
        }
        for (i; i < count; i++) {
            str = keysWords[Math.floor(Math.random() * keysWords.length)];
            if (words.includes(str)) {
                createWord(count, lang);
            } else {
                words.push(str);
            }
        }
        setShortWords(words);
        i = 0;
        words = [];
    }

    const changeLanguage = lang => {
        i18next.init({
            lng: lang,
            resources: require(`./languages/${lang}.json`)
        });
        setLanguage(lang);
        createWord(7, lang);
    }

    useEffect(() => {
        changeLanguage(language);
        setBody(document.querySelector('body'));
        !getStorage('likes') && setStorage('likes', '');
        !getStorage('collection') && setStorage('collection', '');
    }, [])

    const getStorage = key => localStorage.getItem(key);
    const setStorage = (key, value) => localStorage.setItem(key, value);

    return (
        <div className={props.isInitialize && s.App}>

            {
                props.isInitialize &&
                <Navbar
                    setPhotos={props.setPhotos}
                    changeLanguage={changeLanguage}
                    setPage={setPage}
                    body={body}
                    getStorage={getStorage}
                    setStorage={setStorage}
                />
            }

            <MainPage
                {...props}
                page={page}
                setPage={setPage}
                shortWords={shortWords}
                createWord={createWord}
                language={language}
                changeLanguage={changeLanguage}
                body={body}
                getStorage={getStorage}
                setStorage={setStorage}
            />

            {!props.isInitialize && <PageLoader/>}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isInitialize: state.Main.isInitialize,
        photos: state.Main.photos
    }
}

const mapDispatchToProps = {setPhotos, setInitialize}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(App);