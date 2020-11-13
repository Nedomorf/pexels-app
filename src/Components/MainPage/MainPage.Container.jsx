import Gallery from "../Gallery/Gallery";
import React, {useEffect, useState} from "react";
import s from './MainPage.module.css';
import {connect} from "react-redux";
import {setInitialize, setPhotos} from "../../Redux/main-reducer";
import {setPhotosAPI} from "../../api/api";
import Banner from "./Banner/Banner";

const MainPageContainer = (props) => {

    const [page, setPage] = useState(1);

    useEffect(() => {
        setPhotosAPI(page).then(res => {
            console.log('useEffect', res)
            props.setPhotos(res.photos);
        });
    }, [])

    return (
        <div className={s.MainPage}>
            <Banner {...props}/>
            <Gallery {...props} setPhotosAPI={setPhotosAPI} page={page} setPage={setPage}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        photos: state.Main.photos,
        isInitialize: state.Main.isInitialize
    }
}

const mapDispatchToProps = {setPhotos, setInitialize}


export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);

