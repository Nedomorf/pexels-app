import React, {useEffect, useState} from "react";
import i18next from "i18next";
import {Photo} from "./Photo";

const PhotoContainer = (props) => {

    const [like, setLike] = useState(props.getStorage('likes').split(',').includes(String(props.photoId)));
    const [disable, setDisable] = useState(false);
    const [inCollection, setInCollection] = useState(props.getStorage('collection').split(',').includes(String(props.photoId)));
    const [checked, setChecked] = useState(1);
    const [open, setOpen] = useState(false);
    const [bg, setBg] = useState('#05a081');
    const [toRight, setToRight] = useState('150px');


    const download = (e, size) => {
        e.preventDefault();
        setDisable(true);
        let url = '';
        if (size !== props.downloadUrl) {
            let lang = props.language;
            if (lang !== 'en') {
                props.changeLanguage('en')
            }
            let srcSize = i18next.t(sizes(checked))
            url = props.url[srcSize];
            props.changeLanguage(lang);
        } else {
            url = props.downloadUrl;
        }
        fetch(url, {
            method: "GET",
            headers: {}
        })
            .then(response => {
                response.arrayBuffer().then(function (buffer) {
                    const file = window.URL.createObjectURL(new Blob([buffer]));
                    const link = document.createElement("a");
                    link.href = file;
                    link.setAttribute("download", "image.jpeg");
                    document.body.appendChild(link);
                    link.click();
                    setDisable(false);
                });
            })
            .catch(err => {
                console.log(err);
            })
    };

    const changeLike = (isLiked, id) => {
        setLike(isLiked);
        let likes = props.getStorage('likes').split(',');
        if (isLiked) {
            likes.push(id);
        } else {
            likes = likes.filter(el => el !== String(id));
        }
        props.setStorage('likes', likes);
    }

    const changeCollection = (added, id) => {
        setInCollection(added);
        let collection = props.getStorage('collection').split(',');
        if (added) {
            collection.push(id);
        } else {
            collection = collection.filter(el => el !== String(id));
        }
        props.setStorage('collection', collection);
    }

    const changeModalState = (opening) => {
        setChecked(1);
        setOpen(opening);
        opening
            ? props.body.style.overflowY = 'hidden'
            : props.body.style.overflowY = 'visible'
    }

    useEffect(() => {

    }, []);

    const sizes = (id) => {
        switch (id) {
            case 2:
                return i18next.t('large');
            case 3:
                return i18next.t('medium');
            case 4:
                return i18next.t('small');
            default:
                return i18next.t('original');
        }
    }

    let tooltipBtnStyles = {
        position: `fixed`,
        right: toRight,
        width: `25px`,
        height: `50px`,
        borderLeft: `1px solid #565656`,
        borderRadius: `0 5px 5px 0`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        color: `white`,
        background: bg
    }

    const toggleHover = isOpen => isOpen ? setBg('#06B995') : setBg('#05a081');

    const clientWidth = document.body.clientWidth;

    useEffect(() => {
        (clientWidth < 1050) ? setToRight('10px') : setToRight('150px');
    }, [])

    return (
        <Photo
            {...props}
            open={open}
            changeModalState={changeModalState}
            clientWidth={clientWidth}
            changeCollection={changeCollection}
            inCollection={inCollection}
            disable={disable}
            download={download}
            sizes={sizes}
            checked={checked}
            setChecked={setChecked}
            toggleHover={toggleHover}
            tooltipBtnStyles={tooltipBtnStyles}
            like={like}
            changeLike={changeLike}
            setBg={setBg}
        />
    );
}

export default PhotoContainer;