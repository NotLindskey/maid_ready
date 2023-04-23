import "./LoginSelection.css";
import { useHistory } from "react-router-dom";

function LoginSelection() {
  const history = useHistory();
  return (
    <div className="login-register-selection-body">
      <div className="login-owner">
        <button
          className="btn"
          onClick={() => {
            history.push("/login/owner");
          }}
        >
          Sign in/up as an Owner
        </button>
      </div>

      {/* line to break table to the next row */}
      <div className="break"></div>

      <div className="login-keeper">
        <button
          className="btn"
          onClick={() => {
            history.push("/login/keeper");
          }}
        >
          Sign in/up as a Keeper
        </button>
      </div>

      {/* line to break table to the next row */}
      <div className="break"></div>

      <div className="login-admin">
        <button
          className="btn"
          onClick={() => {
            history.push("/login/admin");
          }}
        >
          Sign in as an Admin
        </button>
      </div>
    </div>
  );
}

export default LoginSelection;
