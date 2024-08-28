import './App.css';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App;
