import React from "react";
import './RadioButton.css';

export const RadioButton = (props) => {
    return (
        <span className="md-radio">
            <input id={props.id} type="radio" name="g" checked={ (props.isChecked === props.id) && true }/>
            <label htmlFor={props.id}>{props.text}</label>
        </span>
    )
}