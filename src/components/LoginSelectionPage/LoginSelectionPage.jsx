import './LoginSelection.css';
import { useHistory } from 'react-router-dom';

function LoginSelection(){
    const history = useHistory();
    return(
        <div className="login-register-selection-body">
            <div className='login-owner'>
                <button onClick={()=>{history.push('/login/owner')}}>Sign in/up as an Owner</button>
            </div>

            <div className='login-keeper'>
                <button  onClick={()=>{history.push('/login/keeper')}}>Sign in/up as a Keeper</button>
            </div>
        </div>
    )
}

export default LoginSelection;