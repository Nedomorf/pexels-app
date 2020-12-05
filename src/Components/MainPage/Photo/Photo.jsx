import s from './Photo.module.css';
import React, {useEffect, useState} from "react";
import {
    HeartTwoTone,
    HeartOutlined,
    PlusCircleOutlined,
    VerticalAlignBottomOutlined,
    CheckCircleOutlined, DownOutlined, MoreOutlined, CloseOutlined
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

    const LightTooltip = withStyles((theme) => ({
        tooltip: {
            backgroundColor: theme.palette.common.white,
            color: `black`,
            boxShadow: theme.shadows[1],
            fontSize: 16,
            width: `300px`
        }
    }))(Tooltip);

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
                    {i18next.t('chooseSize')}
                </div>
                <div className={s.sizes}>
                    {
                        Array.from([1, 2, 3, 4]).map(id => {
                            // let h = '';
                            // let w = '';
                            // for (let i = 0; i < props.photos.length; i++) {
                            //     if (props.photos[i].id === props.id) {
                            //         h = props.photos[i].height;
                            //         w = props.photos[i].width;
                            //     }
                            // }
                            return (
                                <div onClick={() => {
                                    setChecked(id);
                                    setBg('#05a081');
                                }}>
                                    <RadioButton
                                        text={sizes(id)}
                                        id={id}
                                        isChecked={checked}
                                    />
                                    {/*<span>({h}X{w})</span>*/}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
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
        <div>
            <Modal open={open} onClose={() => changeModalState(false)}>
                {
                    (clientWidth < 1050) &&
                    <span style={{position: `fixed`, left: 3, top: 3, height: `20px`, fontSize: 20, zIndex: 1000}}>
                        <CloseOutlined style={{color: `black`}} onClick={() => changeModalState(false)}/>
                    </span>
                }
                <div style={{display: `flex`, flexWrap: `wrap`}}>
                    {
                        (clientWidth < 1050)
                    }
                    {props.photographer}
                    <div>
                        <div>
                            <PlusCircleOutlined/>
                            {i18next.t('collect')}
                        </div>
                        {
                            !disable
                                ?
                                <>
                                    <div onClick={e => download(e, props.url)}
                                         style={{display: `flex`, flexDirection: `column`}}>
                                        <p style={{marginLeft: `-35%`}}>{i18next.t('download')}</p>
                                        <i style={{
                                            marginLeft: `-35%`,
                                            marginTop: `5px`,
                                            textTransform: `capitalize`
                                        }}>{sizes(checked)}</i>
                                    </div>
                                    <LightTooltip
                                        title={<SizeComp/>}
                                        interactive
                                        leaveDelay={200}
                                        placement="bottom-end"
                                        disableFocusListener
                                        onOpen={() => toggleHover(true)}
                                        onClose={() => toggleHover(false)}
                                    >
                                        <div style={tooltipBtnStyles}>
                                            <DownOutlined style={{marginRight: `25px`}}/>
                                        </div>
                                    </LightTooltip>
                                </>
                                :
                                <object type="image/svg+xml" data={props.photoLoader}
                                        style={{position: `fixed`, right: `150px`}}>
                                    svg-animation
                                </object>
                        }
                    </div>
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