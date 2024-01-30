import './chocolate.css'
import Header from '../header';
import craft1 from '../img/для+Олександра/KET05909.jpg'
import craft2 from '../img/для+Олександра/KET05958.jpg'
import craft3 from '../img/для+Олександра/KET05980.jpg'
import craft4 from '../img/для+Олександра/KET05990.jpg'
import { Link } from 'react-router-dom';

const Chocolate = () => {
    return (
        <div className='div-chocolate'>
            <Header />
            <h1>Craft Chocolate</h1>
            <div className='chocolate-images'>
                <img src={craft1} alt="" />
                <img src={craft2} alt="" />
                <img src={craft3} alt="" /><br/>
                <img src={craft4} alt="" />
                <img src={craft4} alt="" />
                <img src={craft4} alt="" />
            </div>
            <Link to='/'>
                <button className='board-button'>До портфоліо</button>
            </Link>
        </div>
    );
};

export default Chocolate;
