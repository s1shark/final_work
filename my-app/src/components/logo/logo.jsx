import './logo.css'
import logo from '../img/logo-g-color@2x.png'
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div className="logo">
            <Link to='/'>
                <img src={logo} alt="logo" />
            </Link>
            <ul>
                <Link to='/services'><li>Послуги</li></Link>
                <Link to='/about-me'><li>Про мене</li></Link>
                <Link to='/portfolio'><li>Портфоліо</li></Link>
                <li>Контакти</li>
            </ul>
        </div>
    );
};

export default Logo;
