import './portfolio.module.css'
import gornyatko from '../img/горнятко5.jpg'
import firstIMG from '../img/KET00260.jpg'
import secondIMG from '../img/KET05990.jpg'

const Portfolio = () => {
    return (
        <>
            <div className='main'>
                <div className="gornyatko">
                    <img src={gornyatko} alt="img" />
                    <p>pottery ceramicsel</p>
                </div>
                <div className='first'>
                    <img src={firstIMG} alt="img" />
                    <p>wooden board</p> 
                </div>
                <div className='second'>
                    <img src={secondIMG} alt="img" />
                    <p>craft chocolate</p> 
                </div>
            </div>
        </>
    );
};

export default Portfolio;
