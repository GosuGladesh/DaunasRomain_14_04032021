import Dropdown from "../Dropdown/Dropdown";

import React from "react";
import { useState } from "react";
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
    
    function handleSubmit(e) {
        e.preventDefault();
        store.dispatch(modal_visibility(true))
        store.dispatch(add_employee({firstName,lastName,dateOfBirth: birthDate,startDate,street,city,state:countryState,zipCode: zip,department}))
    }
    return (        
        <>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" onChange={(e) => setFirstName(e.target.value)}></input>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" onChange={(e) => setLastName(e.target.value)}></input>
                <label htmlFor="birthDate">Date of birth</label>
                <input type="date" id="birthDate" data-testid="birthdate" onChange={(e) => setBirhtDate(e.target.value)}></input>
                <label htmlFor="startDate">Start date</label>
                <input type="date" id="startDate" data-testid="startdate" onChange={(e) => setStartDate(e.target.value)}></input>
                <div className="address">
                    <p className="addressTitle">Address</p>
                    <label htmlFor="street">Street</label>
                    <input type="text" id="street" onChange={(e) => setStreet(e.target.value)}></input>
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" onChange={(e) => setCity(e.target.value)}></input>
                    <label htmlFor="state">State</label>
                    <Dropdown values={states} callback={setCountrystate} id={"state"}></Dropdown>
                    <label htmlFor="zip">Zip Code</label>
                    <input type="number" id="zip" onChange={(e) => setZip(e.target.value)}></input>
                </div>
                <label htmlFor="department">Department</label>
                <Dropdown values={dropDepartment} callback={setDepartment} id={"department"}></Dropdown>
                <input className="buttonSubmit" type="submit" data-testid="submitButton"></input>
            </form>  
        </>
        
    )
}

export default Form;