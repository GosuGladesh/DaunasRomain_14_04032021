
const initialSate = {
    employees: [],
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