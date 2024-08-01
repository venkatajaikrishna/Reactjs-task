import React from 'react';
import './App.css';
import Nav from "./web/nav";
import { BrowserRouter ,Routes , Route} from "react-router-dom";
import Home from "./web/home";
import Contact from "./web/contact";
import Movie from "./web/movie";
import About from "./web/about";



const App = () => {
  return (

    <BrowserRouter>
      <Nav />


      <Routes>

        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/movie" element={<Movie />}/>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
