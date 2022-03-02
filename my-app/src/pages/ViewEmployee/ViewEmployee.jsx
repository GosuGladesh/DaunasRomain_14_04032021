import { Link } from 'react-router-dom';
import Tableau from "../../components/Tableau/Tableau"


function ViewEmployee(props) {
    
    return (
        <>
            <h1>Current Employees</h1>
            
            <Tableau></Tableau>
            <Link to="/">Home</Link>
        </>
    )
}

export default ViewEmployee;