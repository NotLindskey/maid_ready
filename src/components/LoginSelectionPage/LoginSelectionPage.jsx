import './LoginSelection.css';

function LoginSelection(){
    return(
        <div className="login-register-selection-body">
            <div>
                <button>Sign in as an Owner</button>
            </div>

            <div>
                <button>Sign in as a Keeper</button>
            </div>
        </div>
    )
}

export default LoginSelection;