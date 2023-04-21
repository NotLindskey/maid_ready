import "./LogoBar.css"
import image from "../../images/cleaning.png"

function LogoBar() {
    return(
        <div>
            <div className="logo">
                <img src={image} alt="Maid!Ready!" width="100" height="100"></img>
            </div>
        </div>
    )
}

export default LogoBar;