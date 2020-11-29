import React, {useEffect, useState} from "react";
import s from './RecommendsGallery.module.css'
import {NavLink} from "react-router-dom";

export const RecommendsGallery = (props) => {

    let words = [];
    let res = [];
    let url = '';
    const [photos, setPhotos] = useState([]);

    const createWord = () => {
        let str = props.keyWords[Math.floor(Math.random() * props.keyWords.length)];
        if (words.includes(str)) {
            createWord();
        } else {
            words.push(str);
        }
        // recommendsPhoto(str);
        props.setPhotosAPI(1, true, str).then(res => {
            if (res.photos[0]) {
                url = res.photos[0].src.tiny;
            }
        });
        props.setRecommends([str, url]);

    }

    // const recommendsPhoto = (str) => {
    //     let url = ''
    //     props.setPhotosAPI(1, true, str).then(res => {
    //         url = res.photos[0].src.tiny;
    //         debugger
    //     });
    //     props.setRecommends([str, url]);
    //     debugger
    // }

    useEffect(() => {
        for (let i = 0; i < 3; i++) {
            createWord();
            console.log(res);
        }
    }, [])

    return (
        <div className={s.RecommendsGallery}>
            {/*{*/}
            {/*    props.keyWords.map((word, i) => {*/}
            {/*        if (i < 3) {*/}
            {/*            createWord();*/}
            {/*            return (*/}
            {/*                <div>*/}
            {/*                    <p>{str}</p>*/}
            {/*                    <img src={url} alt=""/>*/}
            {/*                </div>*/}
            {/*            )*/}
            {/*        }*/}
            {/*    })*/}
            {/*}*/}
            {
                props.recommends.map((photo, i) => {
                    debugger
                    if (photo[1] && photo[1] !== '') {
                        return (
                            <div className={s.recommendsElement}>
                                <div className={s.recommendsWord}>
                                    <p>{photo[0]}</p>
                                </div>
                                <img src={photo[1]} alt=""/>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}