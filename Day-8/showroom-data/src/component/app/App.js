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
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App">
      <Header />
      <Carousel/>
      <Search dropdown={dropdown} setDropdown={setDropdown} setSearchValue={setSearchValue}/>
      <Car dropdown={dropdown} searchValue={searchValue}/>
      <Footer />
    </div>
  );
}

export default App;
