import './wooden.css'
import Header from '../header';
import wooden1 from '../img/для+Олександра/KET00191-2.jpg'
import wooden2 from '../img/для+Олександра/KET00203.jpg'
import wooden3 from '../img/для+Олександра/KET00221.jpg'
import wooden4 from '../img/для+Олександра/KET00230.jpg'
import wooden5 from '../img/для+Олександра/KET00240-.jpg'
import wooden6 from '../img/для+Олександра/KET00249.jpg'
import { Link } from 'react-router-dom';

const Wooden = () => {
    return (
        <div className='wooden-div'>
            <Header />
            <h1>Wooden Board</h1>
            <div className='wooden-images'>
                <img src={wooden1} alt="" />
                <img src={wooden2} alt="" />
                <img src={wooden3} alt="" />
                <img src={wooden4} alt="" />
                <img src={wooden5} alt="" />
                <img src={wooden6} alt="" />
            </div>
            <Link to='/'>
                <button className='board-button'>До портфоліо</button>
            </Link>
        </div>
    );
};

export default Wooden;
