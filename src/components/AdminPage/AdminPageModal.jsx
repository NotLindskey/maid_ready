import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './AdminPageModal.css';

function adminPageModal({closeModal, username, accountType}) {
    let dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const errors = useSelector((store) => store.errors);


    const handleSubmit = () => {
        if (email == ''){
            alert("Please enter a email.");
        } else if (password == '') {
            alert("Please enter a password.")
        } else {
            dispatch({type: 'REGISTER', payload: {
                username: username,
                account_type: accountType,
                email: email,
                password: password
                }
            });
        }
    }
    
    return(
        <div className="modal-background">
            <div className="modal-container">
                <button className="close-btn" onClick={() => closeModal(false)}> X </button>

                {errors.registrationMessage && (
                    <h3 className="alert" role="alert">
                    {errors.registrationMessage}
                    </h3>
                 )}

                <div className="title">
                    <h3>Enter an email and password for this new Admin.</h3>
                </div>

                <br></br>

                <div className="email-input">
                    <label>Email:
                        <input placeholder="Enter email" onChange={(event) => setEmail(event.target.value)}></input>
                    </label>
                </div>
                <div className="password-input">
                    <label>Password:
                        <input placeholder="Enter password" onChange={(event) => setPassword(event.target.value)}></input>
                    </label>
                </div>
                    
                <br></br>

                <div className="modal-btns">
                    <button className="btn" onClick={() => closeModal(false)}>Cancel</button>
                    &nbsp;
                    <button className="btn" onClick={() => handleSubmit()}>Add Admin</button>
                </div>
                
            </div>
        </div>
    )
}

export default adminPageModal;