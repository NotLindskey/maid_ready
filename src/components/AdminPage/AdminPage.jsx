import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './AdminPage.css';
 
 function AdminPage() {
    const dispatch = useDispatch();
    const [manageUser, setManageUser] = useState('');
    const [userType, setUserType] = useState('');
    const [email, setEmail] = useState('');
    const [userState, setUserState] = useState(true);

    useEffect(() => {
        
      }, []);

    //handles when the user clicks the add-btn
    const handleAdd = () => {
        //pop up modal to get password and email for the admin
    }

    //handles when the user clicks the remove-btn
    const handleRemove = () => {
        //check if required fields are filled in
        if (manageUser == ''){
            alert('Please enter a user name.');
        }else if (userType == ''){
            alert('Please select a user type.');
        }else if (email == ''){
            alert('Please enter an email address.');
        }
        //check if the user type is admin to pop up a modal
        else if (userType == 'admin'){
            //pop up modal to ask if the user wants to remove the admin or the admin's privileges
            return;
        }
        //remove the user
        else{
            // dispatch({type: '', payload: {

            // }})
        }
    }

    const toggleAddBtn = () => {
        document.getElementById("add-btn").disabled = userState;
    }

    return(
        <div>
            <h3>Manage Users</h3>
            <br></br>

            <div id="manage-user-inputs">
                <label> User Name:
                    <input id="user-name-input" onChange={(event) => setManageUser(event.target.value)}></input>
                </label>
            </div>
            
            <div id="radio-btn-div" onChange={(event) => setUserType(event.target.value)}>
                <input type="radio" value="admin" name="user" checked={setUserState(true)}/> Admin <br></br>
                <input type="radio" value="owner" name="user" checked={setUserState(false)}/> Owner <br></br>
                <input type="radio" value="keeper" name="user" checked={setUserState(false)}/> Keeper
            </div>

            <div id="add-remove-btn-div">
                <button id="add-btn">Add</button>
                <button id="remove-btn" onClick={() => handleRemove()}>Remove</button>
            </div>
        </div>
    )
 }

 export default AdminPage;