import { Link } from 'react-router-dom';
import { useSelector} from "react-redux"

function ViewEmployee(props) {
    
    const user = useSelector((state) => state.employees); 

    return (
        <>
            <h1>Current Employees</h1>
            <Link to="/">Home</Link>
        </>
    )
}

export default ViewEmployee;