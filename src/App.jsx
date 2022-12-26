import React from 'react'
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer'
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';


const App = () => {
  return (
  <div>
    <Header />
    <Home />
    <About />
    <Projects />
    <Contact />
    <Footer/>
  </div>)
}

export default App
