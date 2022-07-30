import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Carrers from "./pages/Carrers";
import Contactus from "./pages/Contactus";
import Login from './pages/Login';
import Signup from './pages/Signup';
import React, { pages } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
//import background from "./assets/background3.jpg";
import { useContext, useState } from "react";
import { Context } from "./context/Context";
function App() {
    const { user, dispatch } = useContext(Context);
  return (
    <Router>
    <div className="App" >

      <Navbar />
      <Routes>
          <Route exact path='/'  element={user?<Home />:<Login/>}> </Route>
          <Route exact path='/about' element={user?< About />:<Login/>}></Route>
          <Route exact path='/carrers' element={ user?<Carrers />:<Login/>}></Route>
          <Route exact path='/contactus' element={user?< Contactus />:<Login/>}></Route>
          <Route exact path='/login' element={< Login />}></Route>
         < Route exact path='/signup' element={< Signup />}></Route>
     </Routes>
     <Footer/>
       </div>
       </Router>
  );
  }

export default App;
