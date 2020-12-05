import GalleryContainer from "./Gallery/GalleryContainer";
import React, {useEffect} from "react";
import {Route} from "react-router-dom";
import s from './MainPage.module.css';
import {setPhotosAPI, getPhotoAPI} from "../../api/api";
import Banner from "./Banner/Banner";

const MainPage = (props) => {

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
                <Banner {...props} setPhotosAPI={setPhotosAPI} getPhotoAPI={getPhotoAPI}/>
            </Route>
            <GalleryContainer
                {...props}
                setPhotosAPI={setPhotosAPI}
            />
        </div>
    )
}

export default MainPage;

