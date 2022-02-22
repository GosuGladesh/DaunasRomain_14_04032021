
import { useSelector } from "react-redux";
import { useState } from "react";
import { modal_visibility } from "../../app/employeeReducer";
import { store } from "../../app/store"
import { useEffect } from "react";
function Modal(props) {

    const modal = useSelector((state) => state.modalVisibility);    


    function closeModal() {
        store.dispatch(modal_visibility(false))
    }

    if(modal) {
        return (
            <>
                <div class="modal-background">
                    <div class="modal">
                        <button onClick={closeModal}>X</button>
                        <p> Employee added</p>
                    </div>
                </div>
                
            </>
        )
    }
    else {
        return null
    }
    
}

export default Modal;