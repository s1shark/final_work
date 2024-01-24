import './about.css';
import imgBig from '../img/1VIC_7634мини.jpg';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='about-main'>
            <img className='imgBig' src={imgBig} alt="img-about-me" />
            <div className="about-me-text">
                <p className='about-h1'>Kateryna Basiuk</p>
                <p className='about-p'>Привіт <br/>Я фотограф та стиліст їжі <br/>Вмію це робити смачно та якісно! <br/>Якщо ваш продукт потребує гарної картинки, тоді Вам до мене!</p>
                <Link to="/contacts"><button className='about-button'>Зв'язатися зі мною</button></Link>
                <Link to="/"><button className='about-to-portfolio'>До портфоліо</button></Link>
            </div>
        </div>
    );
};

export default About;
