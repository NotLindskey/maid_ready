import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { useHistory } from "react-router-dom";

function LoginPage({ type }) {
  const history = useHistory();

  return (
    <div>
      <h2>Welcome {type}</h2>
      <LoginForm account_type={type} />
      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push(`/register/${type}`);
          }}
        >
          Register
        </button>
      </center>
    </div>
  );
}

export default LoginPage;
