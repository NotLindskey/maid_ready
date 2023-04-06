import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory, useParams } from 'react-router-dom';

function LoginPage({type}) {
  const history = useHistory();
  const params = useParams();
  const userType = type || params.type;
  
  return (
    <div>
      <LoginForm />
      <p>{userType}</p>
      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push(`/register/${userType}`);
          }}
        >
          Register
        </button>
      </center>
    </div>
  );
}

export default LoginPage;
