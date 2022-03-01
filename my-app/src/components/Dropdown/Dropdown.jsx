function Dropdown(props) {
    
    const options = props.values.map((option) => <option value={option.abbreviation}>{option.name}</option>)

    return (
        <select>
           {options}
        </select>
    )
}

export default Dropdown;