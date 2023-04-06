import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage({type}) {
  const history = useHistory();

  return (
    <div>
      <h2>Welcome {type}</h2>
      <p>Register here:</p>
      <RegisterForm account_type={type}/>

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push(`/login/${type}`);
          }}
        >
          Login
        </button>
      </center>
    </div>
  );
}

export default RegisterPage;
