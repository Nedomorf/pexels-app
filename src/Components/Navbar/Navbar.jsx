import React, {useState} from "react";
import s from './Navbar.module.css';
import SearchField from "../Common/SearchField/SearchField";
import {NavLink, withRouter} from "react-router-dom";
import {MenuOutlined, MoreOutlined} from '@ant-design/icons';
import {getPhotoAPI, setPhotosAPI} from "../../api/api";
import i18next from "i18next";
import {compose} from "redux";
import Tooltip from '@material-ui/core/Tooltip';
import {withStyles} from "@material-ui/core";
import gbFlag from '../Common/Flags/gb-flag.svg'
import rusFlag from '../Common/Flags/rus-flag.svg'
import {Menu} from "./Menu/Menu";

const LightTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: `black`,
        boxShadow: theme.shadows[1],
        fontSize: 16,
        width: `300px`
    },
    arrow: {
        color: theme.palette.common.white
    }
}))(Tooltip);

const Navbar = (props) => {

    const [visible, setVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState('rgb(192, 195, 196)');

    window.onscroll = () => {
        let scrollTop = document.body.parentElement.scrollTop;
        (scrollTop > 100) ? setVisible(true) : setVisible(false)
    }

    const LangComp = () => {
        return (
            <div className={s.tooltip}>
                <div onClick={() => props.changeLanguage('ru')}>
                    <img src={rusFlag} alt=""/>
                    {i18next.t('rusLangNav')}
                </div>
                <div onClick={() => props.changeLanguage('en')}>
                    <img src={gbFlag} alt=""/>
                    {i18next.t('engLangNav')}
                </div>
                {
                    (window.innerWidth < 1260) &&
                    <>
                        <div>{i18next.t('findPhotoNav')}</div>
                        <div>
                            <NavLink to='/collection' style={{textDecoration: `none`, color: `black`}}>
                                {i18next.t('collectionNav')}
                            </NavLink>
                        </div>
                        <div>{i18next.t('licenceNav')}</div>
                    </>
                }
            </div>
        )
    }

    const toggleMenu = () => {
        setOpen(!open);
        setVisible(!open);
        let scrollTop = document.body.parentElement.scrollTop;
        (scrollTop > 100) && setVisible(true)
        open
            ? props.body.style.overflowY = 'visible'
            : props.body.style.overflowY = 'hidden'
    }

    const setCollection = () => {
        props.setPhotos([], true);
        let photos = props.getStorage('collection').split(',');
        photos.map(photoId => {
            (photoId && photoId !== '') &&
            getPhotoAPI(photoId, true).then(res => {
                props.setPhotos([res], false);
            });
        })
        setOpen(false);
    }

    const toggleHover = isHover => isHover ? setColor('white') : setColor('rgb(192, 195, 196)')

    return (
        <div className={`${s.Navbar} ${(
            visible || props.location.pathname.includes('/search') || props.location.pathname === '/collection'
        ) && s.NavVisible}`}>
            <NavLink
                to='/'
                className={s.logoContainer}
                onClick={() => {
                    props.setPage(1);
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
            <div
                className={`
                ${s.search} 
                ${(
                    visible || props.location.pathname.includes('/search') || props.location.pathname === '/collection'
                ) && s.searchVisiable}
                `}>
                <SearchField text={i18next.t('navSearchPlaceholder')}/>
            </div>
            <div className={s.navs}>
                <div className={s.navsElement}>{i18next.t('findPhotoNav')}</div>
                <NavLink
                    to='/collection'
                    className={s.navsElement}
                    onClick={() => setCollection()}
                >
                    {i18next.t('collectionNav')}
                </NavLink>
                <div className={s.navsElement}>{i18next.t('licenceNav')}</div>
                <LightTooltip
                    title={<LangComp/>}
                    arrow
                    interactive
                    leaveDelay={200}
                    placement="bottom-end"
                >
                    <MoreOutlined className={s.more}/>
                </LightTooltip>
                <div className={s.btn}>{i18next.t('joinNav')}</div>

                <MenuOutlined className={s.hamburgerMenu} onClick={() => toggleMenu()}/>

            </div>
            {
                open &&
                <Menu
                    color={color}
                    toggleHover={toggleHover}
                    rusFlag={rusFlag}
                    gbFlag={gbFlag}
                    setCollection={setCollection}
                    changeLanguage={props.changeLanguage}
                />
            }
        </div>
    )
}

export default compose(
    withRouter
)(Navbar);

// export default Navbar;