import './LogoBar.css';
import image from '../../images/cleaning.png';

function LogoBar() {
  const logoClicked = () => {
    console.log('logo clicked!');
  };

  return (
    <div>
      <div className="nav-logo">
        <img
          src={image}
          onClick={logoClicked}
          alt="Maid!Ready!"
          width="115"
          height="115"
        ></img>
      </div>
    </div>
  );
}

export default LogoBar;
