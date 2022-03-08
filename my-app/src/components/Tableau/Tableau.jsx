import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Tableau(props) {
  const employees = useSelector((state) => state.employees);

  const [localEmployee, setLocalEmployee] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    setLocalEmployee(employees);
  }, []);

  function sorting(property) {
    let sortEmployee = localEmployee;
    sortEmployee.sort((a, b) =>
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0
    );
    setLocalEmployee([...sortEmployee]);
    console.log(localEmployee);
  }

  function pageNext() {
    if (currentPage === Math.ceil(localEmployee.length/pageSize)) {
      return
    }
    setCurrentPage(currentPage + 1)
  }
  function pagePrevious() {
    if (currentPage === 1) {
      return
    }
    setCurrentPage(currentPage - 1)
  }
  function pageSet(page) {
    setCurrentPage(page)
  }
  function search(input) {
    if (input === "") {
      setLocalEmployee(employees);
      return
    }
    let result = localEmployee.filter( employee => {
        if(employee.firstName.includes(input) || employee.lastName.includes(input) || employee.dateOfBirth.includes(input) || employee.department.includes(input) || employee.startDate.includes(input) || employee.street.includes(input) || employee.city.includes(input) || employee.state.includes(input) || employee.zipCode.includes(input)){
          return true
        }
        return false
      })
    setLocalEmployee(result)
  }
  return (
    <>
      <div class="filters">
        <div>
            <p>Show</p>
            <select onChange={(e) => setPageSize(e.target.value)}>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <p>entries</p>
        </div>
        <div>
          <p>Search:</p>
          <input type="text" onChange={(e) => search(e.target.value)}></input>
        </div> 
      </div>
      
    <table>
      <thead>
        <tr>
          <th onClick={() => sorting("firstName")}>First Name</th>
          <th onClick={() => sorting("lastName")}>Last Name</th>
          <th onClick={() => sorting("dateOfBirth")}>Start Date</th>
          <th onClick={() => sorting("department")}>Department</th>
          <th onClick={() => sorting("startDate")}>Date of Birth</th>
          <th onClick={() => sorting("street")}>Street</th>
          <th onClick={() => sorting("city")}>City</th>
          <th onClick={() => sorting("state")}>State</th>
          <th onClick={() => sorting("zipCode")}>Zip Code</th>
        </tr>
      </thead>
      <tbody>
        {localEmployee.slice((currentPage - 1)*pageSize, currentPage * pageSize).map((employee) => {
          return (
            <tr>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.dateOfBirth}</td>
              <td>{employee.department}</td>
              <td>{employee.startDate}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>
              <td>{employee.zipCode}</td>
            </tr>
          );
        })}
      </tbody>
      </table>
      <div class="tableNav">
        <button onClick={pagePrevious}>prev</button>

        <button onClick={pageNext}>next</button>
      </div>
      </>
  );
}

export default Tableau;
/*
create state for line number
split store array base on line number
create array of array2, each array2 = 1 tabla page
*/
