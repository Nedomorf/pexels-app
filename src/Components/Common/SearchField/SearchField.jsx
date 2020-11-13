import React from "react";
import './SearchField.css';
import {SearchOutlined} from "@ant-design/icons";

export const SearchField = (props) => {
    return <>
        <input type="text" placeholder={props.text} className="searchField"/>
        <SearchOutlined style={{fontSize: `20px`, color: `#000`}} className="searchIcon"/>
    </>
}