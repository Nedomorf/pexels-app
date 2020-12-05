import s from './Menu.module.css';
import {NavLink} from "react-router-dom";
import i18next from "i18next";
import React from "react";

export const Menu = (props) => {
    return (
        <div className={s.menuBody}>
            <div className={s.navBlock}>
                <div className={s.menuElement}>
                    <NavLink
                        to='/'
                        style={{textDecoration: `none`, color: props.color}}>
                        {i18next.t('mainNav')}
                    </NavLink>
                    <div className={s.navPop}/>
                </div>
            </div>
            <div className={s.navBlock}>
                <div className={s.menuElement}>
                    {i18next.t('findPhotoNav')}
                    <div className={s.navPop}/>
                </div>
                <div className={s.menuElement}
                     onMouseEnter={() => props.toggleHover(true)}
                     onMouseLeave={() => props.toggleHover(false)}
                >
                    <NavLink
                        to='/collection'
                        style={{textDecoration: `none`, color: props.color}}
                        onClick={() => props.setCollection()}
                    >
                        {i18next.t('collectionNav')}
                    </NavLink>
                    <div className={s.navPop}/>
                </div>
                <div className={s.menuElement}>
                    {i18next.t('licenceNav')}
                    <div className={s.navPop}/>
                </div>
            </div>
            <div className={s.navBlock}>
                <div className={s.menuElement} onClick={() => props.changeLanguage('ru')}>
                    <img src={props.rusFlag} alt=""/>
                    {i18next.t('rusLangNav')}
                    <div className={s.navPop}/>
                </div>
                <div className={s.menuElement} onClick={() => props.changeLanguage('en')}>
                    <img src={props.gbFlag} alt=""/>
                    {i18next.t('engLangNav')}
                    <div className={s.navPop}/>
                </div>
            </div>
        </div>
    )
}