import './App.css';
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import MainPageContainer from "./Components/MainPage/MainPage.Container";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <MainPageContainer/>
        </div>
    );
}

export default App;
