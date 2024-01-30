import './board.css'
import board1 from "../img/для+Олександра/горнятко1.jpg"
import board2 from "../img/для+Олександра/горнятко2.jpg"
import board3 from "../img/для+Олександра/горнятко3.jpg"
import board4 from "../img/для+Олександра/горнятко5.jpg"
import Header from '../header'
import { Link } from 'react-router-dom'

const Board = () => {
    return (
        <div className='board-div'>
            <Header />
            <h1>Pottery</h1>
            <div className='board-images'>
                <img className='imgfirst' src={board1} alt="" />
                <img src={board2} alt="" />
                <img src={board3} alt="" />
                <img src={board4} alt="" />
            </div>
            <Link to='/'>
                <button className='board-button'>До портфоліо</button>
            </Link>
        </div>
    );
};

export default Board;
