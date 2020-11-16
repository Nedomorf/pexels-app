import React, {useState} from "react";
import './SearchField.css';
import {SearchOutlined} from "@ant-design/icons";
import {setPhotosAPI} from "../../../api/api";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {setInitialize, setPhotos} from "../../../Redux/main-reducer";

const SearchField = (props) => {

    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);

    const getPhotos = () => {
        props.setInitialize(false);
        setPhotosAPI(page, true, query).then(res => {
            console.log('Search', res);
            props.setPhotos(res.photos, true);
            props.setPhotos(res.photos, false);
            props.history.push(`/search/${query}`);
            props.setInitialize(true);
        });
    }

    return <>
        <input
            type="text"
            placeholder={props.text}
            className="searchField"
            onKeyPress={e => (e.key === 'Enter') && getPhotos()}
            onChange={e => setQuery(e.currentTarget.value)}/>
        <SearchOutlined style={{fontSize: `20px`, color: `#000`}} className="searchIcon" onClick={() => getPhotos()}/>
    </>
}

const mapStateToProps = (state) => ({

})

export default compose(
    connect(mapStateToProps, {setPhotos, setInitialize}),
    withRouter
)(SearchField)