import React from 'react'; 
import { render, screen, fireEvent} from '@testing-library/react'; 
//import fireEvent from '@testing-library/dom';
import Form from "../components/Form/Form";
import { store } from "../app/store";

//start test with jest --config ./package.json


describe("I submit from data", () => {
    it("form data should be stored in redux store", async () => {
        render(<Form/>);
        const firstname = screen.getByLabelText("First Name");
        const lastname = screen.getByLabelText("Last Name");
        const birthdate = screen.getByLabelText("Date of birth");
        const startdate = screen.getByLabelText("Start date");
        const street = screen.getByLabelText("Street");
        const city = screen.getByLabelText("City");
        const state = screen.getByLabelText("State");
        const zip = screen.getByLabelText("Zip Code");
        const department = screen.getByLabelText("Department");

        const submit = screen.getByTestId("submitButton")

        fireEvent.change(firstname, { target: { value: "TestFN" } });
        fireEvent.change(lastname, { target: { value: "TestLN" } });
        fireEvent.change(birthdate, { target: { value: "01/01/01" } }); //bug 
        fireEvent.change(startdate, { target: { value: "02/02/02" } }); //bug
        fireEvent.change(street, { target: { value: "TestStreet" } });
        fireEvent.change(city, { target: { value: "TestCity" } });
        fireEvent.change(state, { target: { value: "TestState" } }); //bug 
        fireEvent.change(zip, { target: { value: 1 } });
        fireEvent.change(department, { target: { value: "TestDepartment" } }); //bug
        

        fireEvent.click(submit);

        const storeData = store.getState().employees;
        
        expect(storeData).toContain({
            "firstName": "TestFN",
            "lastName": "TestLN",
            "dateOfBirth": "01/01/01",
            "startDate": "02/02/02",
            "department": "TestDepartment",
            "street": "TestStreet",
            "city": "TestCity",
            "state": "TestState",
            "zipCode": 1
        }) 
    })
})