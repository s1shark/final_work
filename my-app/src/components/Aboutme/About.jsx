import './about.css'
import imgBig from '../img/1VIC_7634мини.jpg'

const About = () => {
    return (
        <>
            <img className='imgBig' src={imgBig} alt="img-about-me" />
            <div className="about-me-text">
                <p>Kateryna Basiuk</p>
                <p>Привіт <br/>Я фотограф та стиліст їжі <br/>Вмію це робити смачно та якісно! <br/>Якщо ваш продукт потребує гарної картинки, тоді Вам до мене!</p>
                <button>Зв'язатися зі мною</button>
            </div>
        </>
    );
};

export default About;
