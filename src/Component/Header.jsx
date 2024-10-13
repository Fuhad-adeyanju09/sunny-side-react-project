import logo from '../images/logo.svg';
import arrow from '../images/icon-arrow-down.svg';
import { NavLink } from "react-router-dom";
import '../App.css'

function Header(){
    return (
        <header>
            <nav>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="list">
                    <ul>    
                        <li><NavLink to="/about">About</NavLink></li>   
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/project">Projects</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
            <h1>WE ARE CREATIVES</h1>
            <img src={arrow} alt="" className="img" />
        </header>
    );
}

export default Header;