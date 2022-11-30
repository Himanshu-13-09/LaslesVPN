import React from "react";
import logo from '../Images/Logo.svg'
import './Navbar.css'


function Navbar() {
    return (
        <>
        <div className="nav">
            <nav>
                <a><img src={logo} className="logo" alt="logo" /></a>
                <div>
                    <ul id="navbar">
                        <li><a style={{ color: '#F53855' }} href="">About</a></li>
                        <li><a href="">features</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Testimonials</a></li>
                        <li><a href="">Help</a></li>

                    </ul>

                </div>
                <div>
                    <ul id="btn">
                        <a href="">SignIn</a>
                        <button id="signup" href="">SignUp</button>
                    </ul>
                </div>
            </nav>
            </div>
        </>
    )
}
export default Navbar;