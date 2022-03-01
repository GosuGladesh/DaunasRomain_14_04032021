import { Link } from 'react-router-dom';
import Form from '../../components/Form/Form';
import Modal from '../../components/Modal/Modal';


function NewEmployee(props) {
    
        return (
        <>
            <div class="header">
                <h1>HRnet</h1>
                <Link to="/employees">View Current Employees</Link>
                <h2>Create Employee</h2>
            </div>
            <Form></Form>
            <Modal></Modal>
        </>
    )
}

export default NewEmployee;