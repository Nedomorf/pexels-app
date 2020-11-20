import React, {useState} from "react";
import s from './Navbar.module.css';
import SearchField from "../Common/SearchField/SearchField";
import {NavLink} from "react-router-dom";
import {MoreOutlined} from '@ant-design/icons';
import {setPhotosAPI} from "../../api/api";

const Navbar = (props) => {

    const [visiable, setVisiable] = useState(false);

    window.onscroll = () => {
        let scrollTop = document.body.parentElement.scrollTop;
        (scrollTop > 100) ? setVisiable(true) : setVisiable(false)
    }

    return (
        <div className={`${s.Navbar} ${visiable && s.NavVisiable}`}>
            <NavLink
                to='/'
                className={s.logoContainer}
                onClick={() => {
                    props.setPhotos([], true);
                    setPhotosAPI(1, false, '').then(res => {
                        props.setPhotos(res.photos, false);
                    });
                }}
            >
                <div className={s.logo}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 32 32">
                        <path d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
                              fill="#05A081"></path>
                        <path
                            d="M13 21h3.863v-3.752h1.167a3.124 3.124 0 1 0 0-6.248H13v10zm5.863 2H11V9h7.03a5.124 5.124 0 0 1 .833 10.18V23z"
                            fill="#fff"></path>
                    </svg>
                    <p>Pexels</p>
                </div>
            </NavLink>
            <div className={`${s.search} ${visiable && s.searchVisiable}`}>
                <SearchField text={"Поиск бесплатных изображений"}/>
            </div>
            <div className={s.navs}>
                <div className={s.navsElement}>Найти фото</div>
                <div className={s.navsElement}>Коллекция</div>
                <div className={s.navsElement}>Лицензия</div>
                <MoreOutlined className={s.more}/>
                <div className={s.btn} onClick={() => props.setLanguage('ru')}>Присоедениться</div>
            </div>
        </div>
    )
}

export default Navbar;