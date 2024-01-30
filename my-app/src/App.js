import './App.css';
import { Routes, Route } from "react-router";
import { ABOUTME_PATH, BOARD_PATH, CHOCOLATE_PATH, CONTACTS_PATH, HOME_PATH, PORTFOLIO_PATH, SERVICES_PATH, WOODEN_PATH } from './constants/const';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import About from './components/Aboutme/About';
import Contact from './components/Contact';
import Board from './components/Board';
import Chocolate from './components/Chocolate';
import Wooden from './components/Wooden/Woodem';

function App() {
  return (
      <div>
        <Routes>
          <Route path={PORTFOLIO_PATH} element={<Portfolio />} />
          <Route path={HOME_PATH} element={<Portfolio />} />
          <Route path={SERVICES_PATH} element={<Services />} />
          <Route path={ABOUTME_PATH} element={<About />} />
          <Route path={CONTACTS_PATH} element={<Contact />} />
          <Route path={BOARD_PATH} element={<Board />} />
          <Route path={CHOCOLATE_PATH} element={<Chocolate />} />
          <Route path={WOODEN_PATH} element={<Wooden />} />
        </Routes>
      </div>
  );
}

export default App;
