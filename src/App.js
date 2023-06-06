
import './App.css';
import React from 'react';
import {BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom';
import Admin from './Components/Admin';
import Home from './Components/Home';
import Seeds from './Components/Pages/Seeds';
import About from './Components/About';
import Pesticides from './Components/Pages/Pesticides';
import Fertilisers from './Components/Pages/Fertilisers';
import FoodHealth from './Components/FoodHealth';
import AgriImplements from './Components/Pages/AgriImplements';
import Contact from './Components/Contact';
import UserLogin from './Components/UserLogin';
import Buy from './Components/Pages/Buy';
import BuyDetails from './Components/Pages/BuyDetails';
import Product from './Components/Pages/Product';
import ProductCreate from './Components/Pages/ProductCreate';
import ProductEdit from './Components/Pages/ProductEdit';
import ProductDetails from './Components/Pages/ProductDetails';
import Register from './Components/Pages/Registration';

function App() {  
  return (
    <Router>
    <div className="App" id='apphead'>
      <div className='cls'>
        <div>
          <img src='./images/logo.png' alt='...' height='60px' width='80px' />
        </div>
        <Link className="navbar-brand" id='main-head' to="#" style={{textAlign:"center"}}>SHIV AGRO FARM</Link>
         <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link className="" to="/Admin"><button id='adminbtn' className="btn btn-dark" type="button">AdminLogin</button></Link>
</div>

      </div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/About">About</Link>
          </li>
          <div className="dropdown">
    <li type="" data-bs-toggle="dropdown"  id='product' >
    <Link className='nav-link active' to={'/Seeds'}>Products</Link>
  </li>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="/Seeds">Seeds</a></li>
    <li><a className="dropdown-item" href="/Pesticides">Pesticides</a></li>
    <li><a className="dropdown-item" href="/Fertilisers">Fertilisers</a></li>
    <li><a className="dropdown-item" href="/AgriImplements">AgriImplements</a></li>
   </ul>
</div>
        <li className="nav-item">
          <Link className="nav-link active" to="/FoodHealth">Food&Health</Link>
        
        </li>
       <li className="nav-item">
          <Link className="nav-link active" to="/Contact">Contact</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link active" to="/Products">Buy</Link>
        </li> */}
      </ul>
      <div className="c-grid gap-2 d-md-flex justify-content-md-end">
<Link className='' to="/UserLogin"><button id='userbtn' className="btn btn-dark" type="button">UserLogin</button></Link>
</div>
  </div>
  </div>
</nav>
<div className='middle'>
<div className='up-mq'>
<marquee width="100%" direction="left" height="30px">
This is very usefull website for all farmers!!!!,you will get all the good quality agricultural items here with very low price.
</marquee>
</div>
</div><br></br>
</div>
 <Routes>
    <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/Admin' element={< Admin/>}></Route>
      <Route exact path='/Seeds' element={< Seeds/>}></Route>
      <Route exact path='/About' element={< About/>}></Route>
      <Route exact path='/Pesticides' element={< Pesticides/>}></Route>
      <Route exact path='/Fertilisers' element={< Fertilisers/>}></Route>
      <Route exact path='/FoodHealth' element={< FoodHealth/>}></Route>
      <Route exact path='/AgriImplements' element={< AgriImplements/>}></Route>
      <Route exact path='/Contact' element={<Contact/>}></Route>
      <Route exact path='/UserLogin' element={<UserLogin/>}></Route>
      <Route exact path='/Buy/:Id' element={<Buy/>}></Route>
      <Route exact path='/buyDetails' element={<BuyDetails />}></Route>
      <Route exact path='/Product' element={<Product/>}></Route>
      <Route exact path='/Products/Create' element={<ProductCreate/>}></Route>
      <Route exact path='/Products/Edit/:Id' element={<ProductEdit/>}></Route>
      <Route exact path='/Products/Details/:Id' element={<ProductDetails/>}></Route>
      <Route exact path='/Register' element={< Register/>}></Route>
</Routes>
<footer className='footer'>
  <h3>Contact Us</h3>
<h6>Phone No.:-8152099727</h6>
<h6>Email id:-poojamudadagi123@gmail.com</h6>
<h6>Address:-Gulbarga karnataka 585102</h6>
</footer>
    </Router>
    
    );
}

export default App;
