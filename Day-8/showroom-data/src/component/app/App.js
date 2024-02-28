import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Header from '../other/header';
import Footer from '../other/footer';
import Carousel from '../other/carousel';
import Search from '../other/search';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel/>
      <Search />
      <Footer />
    </div>
  );
}

export default App;
