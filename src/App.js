import s from './App.module.css';
import React, {useEffect, useState} from "react";
import Navbar from "./Components/Navbar/Navbar";
import MainPageContainer from "./Components/MainPage/MainPage.Container";
import {connect} from "react-redux";
import {PageLoader} from "./Components/Common/Loaders/PageLoader/PageLoader";
import {setPhotos} from "./Redux/main-reducer";
import i18next from "i18next";
import {Redirect} from "react-router-dom";

function App(props) {

    useEffect(() => {
        setLanguage('en');
    })

    const setLanguage = language => {
        i18next.init({
            lng: language,
            resources: require(`/${language}.json`)
        });
    }

    return (
        <div className={props.isInitialize && s.App}>
            <Redirect from="/pexels-app" to="/"/>
            <MainPageContainer/>
            {props.isInitialize && <Navbar setPhotos={props.setPhotos} setLanguage={setLanguage}/>}

            {!props.isInitialize && <PageLoader/>}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isInitialize: state.Main.isInitialize
    }
}

const mapDispatchToProps = {setPhotos}

export default connect(mapStateToProps, mapDispatchToProps)(App);

