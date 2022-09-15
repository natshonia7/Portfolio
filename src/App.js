import './App.css';
import { Contact } from './components/Contact';
import Experience from './components/Experience';
import { Footer } from './components/Footer';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Services from './components/Services'
import { Testimonial } from './components/Testimonial';
import Works from './components/Works';
import {themeContext} from './Context'
import {useContext} from 'react'



function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
       <Navbar />
       <Intro />
       <Services/>
       <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;