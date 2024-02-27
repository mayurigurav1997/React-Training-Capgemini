import './App.css';
import React from 'react';

import Header from "./component/Header.jsx"
import Footer from './component/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header companyName="Capgemini"/>
      <Footer city="Pune"/>
     </div>
  );
}

export default App;
