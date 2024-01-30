import './portfolio.css'
import gornyatko from '../img/KET03537+.jpg'
import firstIMG from '../img/KET00260.jpg'
import secondIMG from '../img/KET05990.jpg'
import Header from '../header';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className='div-portfolio'>
            <Header />
            <div className='main'>
                <div className="gornyatko">
                    <Link to='/portfolio/board'>
                        <img className='img1' src={gornyatko} alt="img" />
                    </Link>
                    <p>pottery ceramicsel</p>
                    <p className='label'>2023</p>
                </div>
                <div className='first'>
                    <Link to='/portfolio/wooden'>
                        <img className='img2' src={firstIMG} alt="img" />
                    </Link>
                    <p>wooden board</p> 
                    <p className='label'>2023</p>
                </div>
                <div className='second'>
                    <Link to='/portfolio/chocolate'>
                        <img className='img3' src={secondIMG} alt="img" />
                    </Link>
                    <p>craft chocolate</p> 
                    <p className='label'>2023</p>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
