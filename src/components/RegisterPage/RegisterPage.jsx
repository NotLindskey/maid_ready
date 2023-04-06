import React from 'react';

import { useHistory, useParams } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterPage({type}) {
  const history = useHistory();
  const params = useParams();
  const accountType = type || params.type
  return (
    <div>
      <h2>Welcome {accountType}</h2>
      <p>Register here:</p>
      <RegisterForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </button>
      </center>
    </div>
  );
}

export default RegisterPage;
