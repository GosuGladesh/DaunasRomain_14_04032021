
const initialSate = {
    employees: [
        { firstName: "John", lastName: "Smith", dateOfBirth: "08/15/2000", startDate: "03/02/2022", department: "Marketing", street: "12 Joohnson Street", city: "New York", state: "NY", zipCode: "51" },
        { firstName: "Jane", lastName: "Smith", dateOfBirth: "03/15/2000", startDate: "03/08/2022", department: "Marketing", street: "12 Joohnson Street", city: "New York", state: "NY", zipCode: "51" },
        { firstName:"Henry",lastName:"Smith",dateOfBirth:"03/27/2000",startDate:"07/02/2022",department:"Sales",street:"12 Joohnson Street",city:"New York",state:"NY",zipCode:"51"}
    ],
    modalVisibility: false
}

const add_employee = (employeeData) => ({
    type: "ADD_EMPLOYEE",
    payload: employeeData
})
const modal_visibility = (visibility) => ({
    type: "MODAL_VISIBILITY",
    payload: visibility
})

function employeeReducer(state = initialSate, action) {
  
    switch (action.type) {
        case "ADD_EMPLOYEE":
            return {
                ...state,
                employees: [...state.employees, action.payload] 
            }
        case "MODAL_VISIBILITY":
            return {
                ...state,
                modalVisibility: action.payload
            }
        default:
            return state;
    }
}

export {employeeReducer, modal_visibility, add_employee };