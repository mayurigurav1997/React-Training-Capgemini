import './App.css';
import LoginComponent from './example1/login';
import ProductInventory from './example2/Q1';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Page1 from './example3/Page1';
import Page3 from './example3/Page3';
import Page2 from './example3/Page2';
import Page4 from './example3/Page4';
import HomeComponent from './example3/home';
import HeaderNavigation from './example3/HeaderPage';
import PrivateRoute from './example3/PrivateRoute';
import Calculate from './example2/Q2';
import BankApp from './example4/BankApp';
import CounterApp from './example5/CounterApp';
import LoginForm from './example6/LoginForm';
import RabitChickenCountApp from './example7/ChineesGame';

function App() {
  return (
    <div className="App">

      {/*
          28-Feb 
          <LoginComponent /> */}

      {/* 
          29 Feb
          <ProductInventory /> */}

        {/* 29 Feb
        
        <HeaderNavigation />
      <BrowserRouter>
            <Routes>
                  <Route path="" element={<HomeComponent />} />
                  <Route path="page1" element={<Page1 />} />
                  <Route path="page2" element={<Page2 />} />
                  <Route path="page3" element={<PrivateRoute><Page3 /></PrivateRoute>} />
                  <Route path="page4" element={<PrivateRoute><Page4 /></PrivateRoute>} />

                  <Route path="*" element={<p className="text-danger fw-bold">404 Not Found!</p> } />
            </Routes>
      </BrowserRouter> */}

      {/* <Calculate /> */}

      {/* <BankApp /> */}

      {/* <CounterApp /> */}

      {/* <LoginForm /> */}

      <RabitChickenCountApp />

    </div>
  );
}

export default App;
