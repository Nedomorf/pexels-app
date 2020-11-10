import Gallery from "./Gallery/Gallery";
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {setPhotos} from "../../Redux/main-reducer";
import {setPhotosAPI} from "../../api/api";

const MainPageContainer = (props) => {

    const [page, setPage] = useState(1);

    useEffect(() => {
        setPhotosAPI(page).then(res => {
            console.log('useEffect:', res);
            // let newPhotos = [];
            // for (let i = 0; i < res.photos.length; i++) {
            //     newPhotos[i] = res.photos[i].src.large;
            // }
            debugger
            props.setPhotos(res.photos);
        })
    }, [])

    return (
        <Gallery {...props} setPhotosAPI={setPhotosAPI} page={page} setPage={setPage}/>
    )
}

const mapStateToProps = (state) => {
    return {
        photos: state.Main.photos
    }
}

const mapDispatchToProps = {setPhotos}


export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);

