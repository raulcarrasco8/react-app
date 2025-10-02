import React from "react";
import logo from "../assets/images/6c0e3b52-b389-4841-b2ec-05aebf8ea407.png";


function NavBar(props) {
    
    return (
    <nav className="navbar">

        <div><h1>Recipes!</h1></div> 
        <div className="navbar-logo"><img src={logo} alt="Logo"></img></div>

    </nav>
    )
}

export default NavBar;