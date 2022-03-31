import React from "react";

function Dropdown(props) {
    
    const options = props.values.map((option) => <option key={option.abbreviation} value={option.abbreviation}>{option.name}</option>)

    return (
        <select id={props.id} onChange={(e) => props.callback(e.target.value)}>
           {options}
        </select>
    )
}

export default Dropdown;