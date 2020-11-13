import './PageLoader.css';
import React from "react";

export const PageLoader = () => {
    return (
        <div className="loader">
            <div className="loaderContent">
                <div className="loading">
                    Loading
                </div>
                <div id="circleG">
                    <div id="circleG_1" className="circleG"></div>
                    <div id="circleG_2" className="circleG"></div>
                    <div id="circleG_3" className="circleG"></div>
                </div>
                <div className="l_main">
                    <div className="l_square"><span></span><span></span><span></span></div>
                    <div className="l_square"><span></span><span></span><span></span></div>
                    <div className="l_square"><span></span><span></span><span></span></div>
                    <div className="l_square"><span></span><span></span><span></span></div>
                </div>
            </div>
        </div>
    )
}