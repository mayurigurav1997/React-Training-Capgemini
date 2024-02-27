import './App.css';
import React from 'react';

import Header from "./component/Header.jsx"
import Footer from './component/Footer.jsx';
import GreetMe from './component/Greet.jsx';
import WishMe from './component/WishMe.jsx';

function App() {
  return (
    <div className="App">
      <Header companyName="Capgemini"/>
      <div>-----UI rendered by GreetMe Class Component----</div>
      <GreetMe />
      <WishMe />
      <Footer city="Pune"/>
     </div>
  );
}

export default App;
