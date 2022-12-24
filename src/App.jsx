import React from 'react'
import Footer from './components/Footer'
import Home from './components/Home';

const siteProps = {
  name: "Amaya Lucas",
  title: "Full Stack Web Developer",
  email: "amayajlucas@gmail.com",
  gitHub: "ajluc",
  instagram: "",
  linkedIn: "amaya-lucas",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
  <div>
    <Home />
    <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor}/>
  </div>)
}

export default App
