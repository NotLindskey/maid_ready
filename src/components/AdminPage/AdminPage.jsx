import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './AdminPage.css';
 
 function AdminPage() {
    const dispatch = useDispatch();
    const [userName, setUserName] = useState('');
    const [accountType, setAccountType] = useState('');
    const [email, setEmail] = useState('');

    //handles when the user clicks the add-btn
    const handleAdd = () => {
        //pop up modal to get password and email for the admin
        // dispatch({type: 'REGISTER', payload: });
    }

    //handles when the user clicks the remove-btn
    const handleRemove = () => {
        //check if required fields are filled in
        if (manageUser == ''){
            alert('Please enter a user name.');
        }else if (userType == ''){
            alert('Please select a user type.');
        }
        //remove the user
        else{
            dispatch({type: 'DELETE_USER', payload: {
                userName: userName,
                accountType: accountType,
            }});
        }
    }

    const toggleAddBtn = (type, value) => {
        setManageUser(type);
        document.getElementById("add-btn").disabled = value;
    }

    return(
        <div>
            <h3>Manage Users</h3>
            <br></br>

            <div id="manage-user-inputs">
                <label> User Name:
                    <input id="user-name-input" onChange={(event) => setUserName(event.target.value)}></input>
                </label>
            </div>
            
            <div id="radio-btn-div" onChange={(event) => setUserType(event.target.value)}>
                <input type="radio" value="admin" name="user" onChange={() => toggleAddBtn('admin', false)}/> Admin <br></br>
                <input type="radio" value="owner" name="user" onChange={() => toggleAddBtn('owner', true)}/> Owner <br></br>
                <input type="radio" value="keeper" name="user" onChange={() => toggleAddBtn('keeper', true)}/> Keeper
            </div>

            <div id="add-remove-btn-div">
                <button id="add-btn">Add</button>
                <button id="remove-btn" onClick={() => handleRemove()}>Remove</button>
            </div>
        </div>
    )
 }

 export default AdminPage;