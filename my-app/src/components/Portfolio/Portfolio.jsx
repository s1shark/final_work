import './portfolio.css'
import gornyatko from '../img/KET03537+.jpg'
import firstIMG from '../img/KET00260.jpg'
import secondIMG from '../img/KET05990.jpg'
import Header from '../header';

const Portfolio = () => {
    return (
        <>
            <Header />
            <div className='main'>
                <div className="gornyatko">
                    <img className='img1' src={gornyatko} alt="img" />
                    <p>pottery ceramicsel</p>
                    <p className='label'>2023</p>
                </div>
                <div className='first'>
                    <img className='img2' src={firstIMG} alt="img" />
                    <p>wooden board</p> 
                    <p className='label'>2023</p>
                </div>
                <div className='second'>
                    <img className='img3' src={secondIMG} alt="img" />
                    <p>craft chocolate</p> 
                    <p className='label'>2023</p>
                </div>
            </div>
            <div className='end'>Back to Top</div>
        </>
    );
};

export default Portfolio;
