import Dropdown from "../Dropdown/Dropdown";

import { useState } from "react";
import { useSelector } from 'react-redux'
import { store } from "../../app/store";
import { add_employee, modal_visibility } from "../../app/employeeReducer";

import states from "../../data/state.json";
import dropDepartment from "../../data/department.json";

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
    
    const modal = useSelector((state) => state.modalVisibility)

    function handleSubmit(e) {
        e.preventDefault();
        store.dispatch(modal_visibility(true))
        store.dispatch(add_employee({firstname,lastname,birthdate,startdate,street,city,countryState,zip,department}))
    }
    return (        
        <>
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
                    <label>State</label>
                    <Dropdown values={states}></Dropdown>
                    <label>Zip Code</label>
                    <input type="number" onChange={(e) => setZip(e.target.value)}></input>
                </div>
                <label>Department</label>
                <Dropdown values={dropDepartment}></Dropdown>
                <input type="submit"></input>
            </form>  
        </>
        
    )
}

export default Form;