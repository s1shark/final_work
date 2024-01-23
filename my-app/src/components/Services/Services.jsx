import './services.css'
import Header from '../header/header';
import img1 from "../img/KET00260.jpg"
import img2 from "../img/KET03537+.jpg"
import img3 from "../img/KET05990.jpg"

const Services = () => {
    return (
        <>
            <Header />
            <h1>Послуги</h1>
            <div className='page'>
                <ul>
                    <li><img className='img1' src={img1} alt="" /></li>
                    <li><img className='img2' src={img2} alt="" /></li>
                    <li><img className='img3' src={img3} alt="" /></li>
                </ul>
            </div>
            <p className='p'>ціни розраховуються індивідуально в залежності від складності, для цього потрібно <br/>заповнити форму</p>
            <div className="service">
                <button className='service-button'>форма замовлення</button>
            </div> 
            <div className='end'>Back to Top</div>
        </>
    );
};

export default Services;
