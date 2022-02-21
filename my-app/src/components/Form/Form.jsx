import Dropdown from "../Dropdown/Dropdown";
import { useState } from "react";

function Form(props) {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [birthdate, setBirhtdate] = useState('');
    const [startdate, setStartdate] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [countryState, setCountrystate] = useState('');
    const [zip, setZip] = useState('');
    const [department, setDepartment] = useState('');
    

    function handleSubmit() {
        
    }
    return (
        <form class="form" onSubmit={handleSubmit}>
                <label>First Name</label>
                <input type="text" onChange={(e) => setFirstname(e.target.value)}></input>
                <label>Last Name</label>
                <input type="text" onChange={(e) => setLastname(e.target.value)}></input>
                <label>Date of birth</label>
                <input type="date" onChange={(e) => setBirhtdate(e.target.value)}></input>
                <label>Start date</label>
                <input type="date" onChange={(e) => setStartdate(e.target.value)}></input>
                <div class="address">
                    <h3>Address</h3>
                    <label>Street</label>
                    <input type="text" onChange={(e) => setStreet(e.target.value)}></input>
                    <label>City</label>
                    <input type="text" onChange={(e) => setCity(e.target.value)}></input>
                    <Dropdown></Dropdown>
                    <label>Zip Code</label>
                    <input type="number" onChange={(e) => setZip(e.target.value)}></input>
                </div>
                <label>Department</label>
                <Dropdown></Dropdown>
                <input type="submit"></input>
            </form>
    )
}

export default Form;