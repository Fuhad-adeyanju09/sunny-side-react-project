import logo from '../images/logo.svg'
import facebook from '../images/icon-facebook.svg'
import insta from '../images/icon-instagram.svg'
import tweet from '../images/icon-twitter.svg'
import pint from '../images/icon-pinterest.svg'

function Footer(){
    return(
        <footer>
            <img src={logo} alt="" />
            <ul>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
            </ul>
            <ul>
                <li><img src={facebook} alt="" /></li>
                <li><img src={insta} alt="" /></li>
                <li><img src={tweet} alt="" /></li>
                <li><img src={pint}alt="" /></li>
            </ul>
        </footer>
    );
}

export default Footer;