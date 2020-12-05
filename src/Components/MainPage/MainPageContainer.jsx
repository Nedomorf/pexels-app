import Gallery from "../Gallery/Gallery";
import React, {useEffect, useState} from "react";
import {Route, withRouter} from "react-router-dom";
import s from './MainPage.module.css';
import {connect} from "react-redux";
import {setInitialize, setPhotos, setRecommends} from "../../Redux/main-reducer";
import {setPhotosAPI} from "../../api/api";
import Banner from "./Banner/Banner";
import {compose} from "redux";

const MainPageContainer = (props) => {

    useEffect(() => {
        props.setInitialize(false);
        setPhotosAPI(props.page, false, '').then(res => {
            console.log('useEffect', res);
            props.setPhotos(res.photos, false);
            props.setInitialize(true);
        });
    }, [])

    return (
        <div className={s.MainPage}>
            <Route exact path="/">
                <Banner {...props}/>
            </Route>
            <Gallery
                {...props}
                setPhotosAPI={setPhotosAPI}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        photos: state.Main.photos,
        isInitialize: state.Main.isInitialize,
        recommends: state.Main.recommends
    }
}

const mapDispatchToProps = {setPhotos, setInitialize, setRecommends}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(MainPageContainer);

