import React, {useEffect} from "react";
import s from './Navbar.module.css';
import {SearchOutlined} from '@ant-design/icons';
import {SearchField} from "../Common/SearchField/SearchField";

const Navbar = () => {

    // let isVisiable = true;
    // let rectTop = 0;
    // let rectBottom = 0;
    //
    // useEffect(() => {
    //     const navRect = document.getElementById('Navbar');
    //     if (navRect) {
    //         let rect = navRect.getBoundingClientRect();
    //         rectTop = rect.top;
    //         rectBottom = rect.bottom;
    //         isVisiable = (rectTop >= 0) && (rectBottom <= window.innerHeight);
    //         debugger
    //     }
    // })
    //
    // window.onscroll = () => {
    //     isVisiable = (rectTop >= 0) && (rectBottom <= window.innerHeight);
    // }
    //
    // if( !isVisiable) alert('123')

    return (
        <div className={s.Navbar} id="Navbar">
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
            <div className={s.search}>
                <SearchField text={"Поиск бесплатных изображений"}/>
                {/*<SearchOutlined style={{fontSize: `20px`}}/>*/}
            </div>
        </div>
    )
}

export default Navbar;