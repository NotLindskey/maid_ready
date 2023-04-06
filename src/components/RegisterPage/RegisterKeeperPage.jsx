import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

function RegisterKeeperPage() {
  const history = useHistory();

  return (
    <div>
      <h2>Welcome Keeper</h2>
      <p>Register here:</p>
      <RegisterForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login/keeper');
          }}
        >
          Login
        </button>
      </center>
    </div>
  );
}

export default RegisterKeeperPage;
