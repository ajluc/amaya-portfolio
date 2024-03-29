import React from 'react'
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer'
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import MobileHeader from './components/mobileNav';

const App = () => {
  return (
  <div>
    <Header />
    {/* <MobileHeader /> */}
    <main id='page'>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer/>
    </main>
  </div>)
}

export default App
