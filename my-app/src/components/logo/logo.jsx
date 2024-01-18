import './logo.css'
import logo from '../img/logo-g-color@2x.png'

const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt="logo" />
            <ul>
                <li>Послуги</li>
                <li>Про мене</li>
                <li>Портфоліо</li>
                <li>Контакти</li>
            </ul>
        </div>
    );
};

export default Logo;
