import './App.css';
import { Routes, Route } from "react-router";
import { ABOUTME_PATH, CONTACTS_PATH, HOME_PATH, PORTFOLIO_PATH, SERVICES_PATH } from './constants/const';
import Portfolio from './components/Portfolio'
import Services from './components/Services';
import About from './components/Aboutme/About';
import Contact from './components/Contact';

function App() {
  return (
      <div>
        <Routes>
          <Route path={PORTFOLIO_PATH} element={<Portfolio />} />
          <Route path={HOME_PATH} element={<Portfolio />} />
          <Route path={SERVICES_PATH} element={<Services />} />
          <Route path={ABOUTME_PATH} element={<About />} />
          <Route path={CONTACTS_PATH} element={<Contact />} />
        </Routes>
      </div>
  );
}

export default App;
