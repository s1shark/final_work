import './services.css';
import Header from '../header/header';
import img1 from "../img/KET00260.jpg";
import img2 from "../img/KET03537+.jpg";
import img3 from "../img/KET05990.jpg";
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className='div'>
            <Header />
            <h1>Послуги</h1>
            <div className='page'>
                <ul>
                    <div className='first'>
                        <li><img className='img1' src={img1} alt="" /></li>
                        <p>Контента зйомка</p>
                    </div>
                    <div className='first'>
                        <li><img className='img2' src={img2} alt="" /></li>
                        <p>Зйомка на каталог</p>
                    </div>
                    <div className='first'>
                        <li><img className='img3' src={img3} alt="" /></li>
                        <p>Рекламна зйомка</p>
                    </div>
                </ul>
            </div>
            <p className='p'>ціни розраховуються індивідуально в залежності від складності, для цього потрібно <br/>заповнити форму</p>
            <div className="service">
                <Link to="/contacts"><button className='service-button'>форма замовлення</button></Link>
            </div> 
        </div>
    );
};

export default Services;
