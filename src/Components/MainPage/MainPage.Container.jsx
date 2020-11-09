import MainPage from "./MainPage";
import React, {useEffect} from "react";
import {connect} from "react-redux";
import {setPhotos} from "../../Redux/main-reducer";

const MainPageContainer = (props) => {

    console.log(props)

    const config = {
        method: "GET",
        headers: {
            "Authorization": "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf",
        },
        withCredentials: true
    }

    useEffect(() => {
        fetch("https://api.pexels.com/v1/curated?per_page=20", config)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                let newPhotos = [];
                for (let i = 0; i < result.photos.length; i++) {
                    newPhotos[i] = result.photos[i].src.large;
                }
                props.setPhotos(newPhotos);
            })
    }, [])

    return (
        <MainPage {...props}/>
    )
}

let mapStateToProps = (state) => {
    return {
        photos: state.Main.photos
    }
}

let mapDispatchToProps = {setPhotos}


export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);

