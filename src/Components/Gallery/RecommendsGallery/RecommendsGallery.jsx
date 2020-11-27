import React from "react";
import s from './RecommendsGallery.module.css'

export const RecommendsGallery = (props) => {
    return (
        <div className={s.RecommendsGallery}>
            {
                props.keyWords.map(el => {
                    return (
                        <div>{el}</div>
                    )
                })
            }
        </div>
    )
}