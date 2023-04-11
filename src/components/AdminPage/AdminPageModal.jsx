import React from 'react';
import './AdminPageModal.css';

function adminPageModal({closeModal}) {
    
    return(
        <div className="modal-background">
            <div className="modal-container">
                <button className="close-btn" onClick={() => closeModal(false)}> X </button>

                <div className="title">
                    <h3>Enter an email and password for this new Admin.</h3>
                </div>

                <br></br>

                <div className="email-input">
                    <label>Email:
                        <input placeholder="Enter email"></input>
                    </label>
                </div>
                <div className="password-input">
                    <label>Password:
                        <input placeholder="Enter password"></input>
                    </label>
                </div>
                    
                <br></br>

                <div className="modal-btns">
                    <button className="btn" onClick={() => closeModal(false)}>Cancel</button>
                    &nbsp;
                    <button className="btn">Add Admin</button>
                </div>
                
            </div>
        </div>
    )
}

export default adminPageModal;