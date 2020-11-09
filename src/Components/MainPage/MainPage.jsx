import s from './MainPage.module.css';
import React from "react";

const MainPage = (props) => {

    return (
        <div className={s.MainPage}>
            <div className={s.gallery}>
                {
                    props.photos.map(url => <img src={url} alt=""/>)
                }
            </div>
        </div>
    )
}

export default MainPage;