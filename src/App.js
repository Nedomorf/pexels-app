import s from './App.module.css';
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import MainPageContainer from "./Components/MainPage/MainPage.Container";
import {connect} from "react-redux";
import {PageLoader} from "./Components/Common/Loaders/PageLoader/PageLoader";
import {setPhotos} from "./Redux/main-reducer";

function App(props) {
    return (
        <div className={props.isInitialize && s.App}>
            {/*{*/}
            {/*    props.isInitialize &&*/}
            {/*    <div>*/}
            {/*        <Navbar/>*/}
            {/*        <MainPageContainer/>*/}
            {/*    </div>*/}
            {/*}*/}
            <MainPageContainer/>
            {props.isInitialize && <Navbar setPhotos={props.setPhotos}/>}

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

