import { useHistory } from 'react-router-dom';
import './LogoBar.css';

function LogoBar() {
  const history = useHistory();

  const logoClicked = () => {
    console.log('logo clicked!');
    history.push('/home');
  };

  return (
    <div>
      <div>
        <div className="logo-image" onClick={logoClicked}></div>
      </div>
    </div>
  );
}

export default LogoBar;
