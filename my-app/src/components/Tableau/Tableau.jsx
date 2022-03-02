import { useSelector } from "react-redux";

function Tableau(props) {
  const employees = useSelector((state) => state.employees);

  function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }
  function sorting(property) {
    employees.sort(dynamicSort(property));
  }
  
  return (
    <table>
      <thead>
        <tr>
          <th onClick={sorting("firstName")}>First Name</th>
          <th onClick={sorting("lastName")}>Last Name</th>
          <th onClick={sorting("dateOfBirth")}>Start Date</th>
          <th onClick={sorting("department")}>Department</th>
          <th onClick={sorting("startDate")}>Date of Birth</th>
          <th onClick={sorting("street")}>Street</th>
          <th onClick={sorting("city")}>City</th>
          <th onClick={sorting("state")}>State</th>
          <th onClick={sorting("zipCode")}>Zip Code</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => {
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
  );
}

export default Tableau;
