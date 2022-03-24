import Dropdown from "../Dropdown/Dropdown";

import { useState } from "react";
import { useSelector } from 'react-redux'
import { store } from "../../app/store";
import { add_employee, modal_visibility } from "../../app/employeeReducer";

import states from "../../data/state.json";
import dropDepartment from "../../data/department.json";

function Form(props) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirhtDate] = useState('');
    const [startDate, setStartDate] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [countryState, setCountrystate] = useState('');
    const [zip, setZip] = useState('');
    const [department, setDepartment] = useState('');
    
    const modal = useSelector((state) => state.modalVisibility)

    function handleSubmit(e) {
        e.preventDefault();
        store.dispatch(modal_visibility(true))
        store.dispatch(add_employee({firstName,lastName,dateOfBirth: birthDate,startDate,street,city,state:countryState,zipCode: zip,department}))
    }
    return (        
        <>
            <form class="form" onSubmit={handleSubmit}>
                <label for="firstName">First Name</label>
                <input type="text" id="firstName" onChange={(e) => setFirstName(e.target.value)}></input>
                <label for="lastName">Last Name</label>
                <input type="text" id="lastName" onChange={(e) => setLastName(e.target.value)}></input>
                <label for="birthDate">Date of birth</label>
                <input type="date" id="birthDate" onChange={(e) => setBirhtDate(e.target.value)}></input>
                <label for="startDate">Start date</label>
                <input type="date" id="startDate" onChange={(e) => setStartDate(e.target.value)}></input>
                <div class="address">
                    <p class="addressTitle">Address</p>
                    <label for="street">Street</label>
                    <input type="text" id="street" onChange={(e) => setStreet(e.target.value)}></input>
                    <label for="city">City</label>
                    <input type="text" id="city" onChange={(e) => setCity(e.target.value)}></input>
                    <label for="state">State</label>
                    <Dropdown values={states} callback={setCountrystate} id={"state"}></Dropdown>
                    <label for="zip">Zip Code</label>
                    <input type="number" id="zip" onChange={(e) => setZip(e.target.value)}></input>
                </div>
                <label for="department">Department</label>
                <Dropdown values={dropDepartment} callback={setDepartment} id={"department"}></Dropdown>
                <input class="buttonSubmit" type="submit"></input>
            </form>  
        </>
        
    )
}

export default Form;