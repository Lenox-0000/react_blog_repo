import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import New_Post from './New_Post';
import Post_Page from './Post_Page';
import About from './About'
import Missing from './Missing';
import { Route, Routes, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';

function App()
{
  return(
    <div className="App">
      <Header/>

      <Nav/>

      <Routes>

        <Route exact path="/" element={<Home/>}/>

        <Route exact path="/post" element={<New_Post/>}/>

        <Route path="/post/:id" Component={<Post_Page/>}/>
        
        <Route path="/about" Component={<About/>}/>

        <Route path="*" Component={<Missing/>}/>

      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
