import React, {useState} from "react";
import s from './Navbar.module.css';
import SearchField from "../Common/SearchField/SearchField";
import {NavLink, withRouter} from "react-router-dom";
import {MoreOutlined} from '@ant-design/icons';
import {setPhotosAPI} from "../../api/api";
import i18next from "i18next";
import {compose} from "redux";
import Tooltip from '@material-ui/core/Tooltip';
import {withStyles} from "@material-ui/core";

const Navbar = (props) => {

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

    const LangComp = () => {
        return (
            <div className={s.tooltip}>
                <div onClick={() => props.changeLanguage('ru')}>🇷🇺 {i18next.t('rusLangNav')}</div>
                <div onClick={() => props.changeLanguage('en')}>🇬🇧 {i18next.t('engLangNav')}</div>
                {
                    (window.innerWidth < 1260) &&
                    <div>
                        <NavLink to='/search' className={s.navsElement}>{i18next.t('findPhotoNav')}</NavLink>
                        <NavLink to='/collection' className={s.navsElement}>{i18next.t('collectionNav')}</NavLink>
                        <div className={s.navsElement}>{i18next.t('licenceNav')}</div>
                    </div>
                }
            </div>
        )
    }

    const [visiable, setVisiable] = useState(false);

    window.onscroll = () => {
        let scrollTop = document.body.parentElement.scrollTop;
        (scrollTop > 100) ? setVisiable(true) : setVisiable(false)
    }

    return (
        <div className={`${s.Navbar} ${(visiable || props.location.pathname.includes('/search')) && s.NavVisiable}`}>
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
            <div
                className={`${s.search} ${(visiable || props.location.pathname.includes('/search')) && s.searchVisiable}`}>
                <SearchField text={i18next.t('navSearchPlaceholder')}/>
            </div>
            <div className={s.navs}>
                <NavLink to='/search' className={s.navsElement}>{i18next.t('findPhotoNav')}</NavLink>
                <NavLink to='/collection' className={s.navsElement}>{i18next.t('collectionNav')}</NavLink>
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
            </div>
        </div>
    )
}

export default compose(
    withRouter
)(Navbar);

// export default Navbar;