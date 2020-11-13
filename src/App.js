import s from './App.module.css';
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import MainPageContainer from "./Components/MainPage/MainPage.Container";
import {connect} from "react-redux";
import {PageLoader} from "./Components/Common/Loaders/PageLoader/PageLoader";

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
            {props.isInitialize && <Navbar/>}
            <MainPageContainer/>
            {!props.isInitialize && <PageLoader/>}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isInitialize: state.Main.isInitialize
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(App);

