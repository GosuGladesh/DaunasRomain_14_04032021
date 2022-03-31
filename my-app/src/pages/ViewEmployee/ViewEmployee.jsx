import React from "react";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Tableau } from "daunas-p14-table";
//import Tableau from '../../components/Tableau/Tableau';


function ViewEmployee(props) {
    
    const employees = useSelector((state) => state.employees);
    return (
        <>
            <div className="viewEmployee">
                <h1>Current Employees</h1>            
                <Tableau data={employees}></Tableau>
                <Link to="/">Home</Link>
            </div>
        </>
    )
}

export default ViewEmployee;