import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import New_Post from './New_Post';
import Post_Page from './Post_Page';
import About from './About'
import Missing from './Missing';
import { Route, Routes,   } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App()
{
  return(
    <div className="App">
      <p>Hellow world</p>
      <Header/>
      <Nav/>
      <Footer/>
      <Home/>
      <New_Post/>
      <Post_Page/>
      <About/>
      <Missing/>
    </div>
  );
}

export default App;
