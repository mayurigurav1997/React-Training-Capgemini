import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Header from '../other/header';
import Footer from '../other/footer';
import Carousel from '../other/carousel';
import Search from '../other/search';
import Car from '../other/car';
import { useState } from 'react';

function App() {
  const [dropdown, setDropdown] = useState(null);

  return (
    <div className="App">
      <Header />
      <Carousel/>
      <Search dropdown={dropdown} setDropdown={setDropdown}/>
      <Car dropdown={dropdown}/>
      <Footer />
    </div>
  );
}

export default App;
