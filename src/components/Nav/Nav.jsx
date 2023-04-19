import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";
import { MdOutlineCleaningServices, MdOutlineMessage, MdHome, MdLogin } from 'react-icons/md';
import { FaInfoCircle } from 'react-icons/fa';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        {/* <h2 className="nav-title">Maid!Ready!</h2> */}
        
      </Link>
      <div style={{display:"flex", alignItems:"center"}}>

        <p style={{marginRight:"3rem"}}>account type: {user.account_type}</p>

        <Link className="navLink" to="/why-us">
          Why Us
        </Link>

        <Link className="navLink" to="/home">
          <MdHome/>
        </Link>

        <Link className="navLink" to="/service">
          <MdOutlineCleaningServices/>
        </Link>

        <Link className="navLink" to="/about">
        <FaInfoCircle/>
        </Link>

        <Link className="navLink" to="/contact">
          <MdOutlineMessage/>
        </Link>

        {/* If no user is logged in, show these links */}
        {!user.id ? (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login/selection">
            <MdLogin/>
          </Link>
        ) : (
          // <Link className="navLink" to="/user">
          //     User
          //   </Link>
          <LogOutButton className="navLink" />
          
        )}
      </div>
    </div>
  );
}

export default Nav;
