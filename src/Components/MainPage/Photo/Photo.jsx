import s from './Photo.module.css';
import React, {useEffect, useState} from "react";
import {
    HeartTwoTone,
    HeartOutlined,
    PlusCircleOutlined,
    VerticalAlignBottomOutlined,
    CheckCircleOutlined, DownOutlined, MoreOutlined
} from '@ant-design/icons';
import Loader from '../../Common/Loaders/loader.svg';
import Modal from "../../Common/Modal/Modal";
import {withStyles} from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import i18next from "i18next";
import {RadioButton} from "../../Common/RadioButton/RadioButton";

const Photo = (props) => {

    const [like, setLike] = useState(props.getStorage('likes').split(',').includes(String(props.photoId)));
    const [disable, setDisable] = useState(false);
    const [inCollection, setInCollection] = useState(props.getStorage('collection').split(',').includes(String(props.photoId)));
    const [open, setOpen] = useState(false);

    const download = (e, size) => {
        e.preventDefault();
        setDisable(true);
        let url = '';
        if (size !== props.downloadUrl) {
            let lang = props.language;
            debugger
            if (lang !== 'en') {
                props.changeLanguage('en')
            }
            let srcSize = i18next.t(sizes(checked))
            url = props.url[srcSize];
            props.changeLanguage(lang)
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

    const [body, setBody] = useState();
    const changeModalState = (opening) => {
        setOpen(opening);
        opening
            ? body.style.overflowY = 'hidden'
            : body.style.overflowY = 'visible'
    }

    useEffect(() => {
        setBody(document.querySelector('body'));
    }, []);

    const LightTooltip = withStyles((theme) => ({
        tooltip: {
            backgroundColor: theme.palette.common.white,
            color: `black`,
            boxShadow: theme.shadows[1],
            fontSize: 16,
            width: `300px`
        }
    }))(Tooltip);

    const [checked, setChecked] = useState(1);

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

    const SizeComp = () => {
        return (
            <div className={s.tooltip}>
                <div className={s.chooseSize}>
                    Выберите размер:
                </div>
                <div className={s.sizes}>
                    {
                        Array.from([1, 2, 3, 4]).map(id => {
                            return (
                                <RadioButton
                                    text={sizes(id)}
                                    id={id}
                                    isChecked={checked}
                                    setChecked={setChecked}
                                />
                            )
                        })
                    }
                    {/*<div className={s.chooseElement}>*/}
                    {/*    Маленький*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    }

    return (
        <div>
            <Modal open={open} onClose={() => changeModalState(false)}>
                <div>
                    {props.photographer}
                    <div>
                        <PlusCircleOutlined/> В коллекцию
                    </div>
                    <LightTooltip
                        title={<SizeComp/>}
                        interactive
                        leaveDelay={200}
                        placement="bottom-end"
                    >
                        <div onClick={e => download(e, props.url)} style={{display: `flex`, flexDirection: `column`}}>
                            <p style={{marginLeft: `-35%`}}>Бесплатное скачивание</p>
                            <i style={{
                                marginLeft: `-35%`,
                                marginTop: `5px`,
                                textTransform: `capitalize`
                            }}>{sizes(checked)}</i>
                            <div>
                                <DownOutlined/>
                            </div>
                        </div>
                    </LightTooltip>
                </div>
                <img
                    src={props.url.large}
                    alt=""
                />
            </Modal>
            <div className={s.Photo} id="photo">
                <img
                    src={props.url.large}
                    alt=""
                    onClick={() => changeModalState(true)}
                />
                <div className={s.photoAdds}>
                    <div className={s.photographer}>
                        {props.photographer}
                    </div>
                    <div>
                        {
                            disable
                                ? <object type="image/svg+xml" data={Loader}>svg-animation</object>
                                : <a href={props.url.large} download onClick={e => download(e, props.url.original)}>
                                    <VerticalAlignBottomOutlined style={{fontSize: `20px`}} className={s.addsElement}/>
                                </a>
                        }
                    </div>
                    <div>
                        {
                            props.getStorage('collection').split(',').includes(String(props.photoId))
                            && !!inCollection
                                ?
                                <CheckCircleOutlined
                                    style={{fontSize: `20px`}}
                                    className={s.addsElement}
                                    onClick={() => changeCollection(false, props.photoId)}
                                />
                                :
                                <PlusCircleOutlined
                                    style={{fontSize: `20px`}}
                                    className={s.addsElement}
                                    onClick={() => changeCollection(true, props.photoId)}
                                />
                        }
                    </div>
                    <div>
                        {
                            props.getStorage('likes').split(',').includes(String(props.photoId))
                            && !!like
                                ? <HeartTwoTone style={{fontSize: `20px`}} twoToneColor={'#FF0000'}
                                                onClick={() => changeLike(false, props.photoId)}/>
                                : <HeartOutlined style={{fontSize: `20px`}} className={s.addsElement}
                                                 onClick={() => changeLike(true, props.photoId)}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Photo;