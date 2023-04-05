import './LoginSelection.css';
import { useHistory } from 'react-router-dom';

function LoginSelection(){
    const history = useHistory();
    return(
        <div className="login-register-selection-body">
            <div className='login-owner'>
                <button>Sign in/up as an Owner</button>
            </div>

            <div className='login-keeper'>
                <button>Sign in/up as a Keeper</button>
            </div>
        </div>
    )
}

export default LoginSelection;