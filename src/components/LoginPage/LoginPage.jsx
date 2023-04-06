import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { useHistory, useParams } from "react-router-dom";

function LoginPage({ type }) {
  const history = useHistory();
  const params = useParams();
  const accountType = type || params.type;

  return (
    <div>
      <h2>Welcome {accountType}</h2>
      <LoginForm />
      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push(`/register/${accountType}`);
          }}
        >
          Register
        </button>
      </center>
    </div>
  );
}

export default LoginPage;
