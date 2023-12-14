import './app.scss'
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import Services from './components/services/services';


const App = () => {
  return <div>
    <section id='Homepage'>
      <Navbar />
      <Hero />
    </section>
    <section id='Services'><Parallax type={'services'} /></section>
    <section><Services /></section>
    <section id='Portfolio'><Parallax type={'portfolio'} /></section>
    <section style={{ textAlign: 'center' }} id='Contact'>Contact</section>
    <section style={{ textAlign: 'center' }} id='About'>About</section>
  </div>;
};

export default App;
