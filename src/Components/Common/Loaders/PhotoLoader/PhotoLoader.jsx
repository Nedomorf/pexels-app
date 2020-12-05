import s from './PhotoLoader.module.css';
import photoLoader from "./photoLoader.svg";
import React from "react";

export const PhotoLoader = () => {
    return <div className={s.photoLoader}>
        <object type="image/svg+xml" data={photoLoader} className={s.photoLoader}>svg-animation</object>
    </div>
}