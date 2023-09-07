import React from "react";

function FilterButton(props) {
    return <button type="button" className="btn toggle-btn" aria-pressed={props.pressed}>
        <span className="visually-hidden">{props.first}</span>
        <span>{props.second}</span>
        <span className="visually-hidden">{props.third}</span>
    </button>;
}

export default FilterButton;