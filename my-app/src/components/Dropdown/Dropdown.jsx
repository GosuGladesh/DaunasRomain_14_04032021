function Dropdown(props) {
    
    const options = props.values.map((option) => <option value={option.abbreviation}>{option.name}</option>)

    return (
        <select id={props.id} onChange={(e) => props.callback(e.target.value)}>
           {options}
        </select>
    )
}

export default Dropdown;