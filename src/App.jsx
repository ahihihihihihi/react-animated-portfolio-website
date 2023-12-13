import './app.scss'
import Navbar from './components/navbar/Navbar';


const App = () => {
  return <div>
    <section>
      <Navbar />
    </section>
    <section style={{ textAlign: 'center' }} id='Homepage'>Homepage</section>
    <section style={{ textAlign: 'center' }} id='Services'>Services</section>
    <section style={{ textAlign: 'center' }} id='Portfolio'> Portfolio</section>
    <section style={{ textAlign: 'center' }} id='Contact'>Contact</section>
    <section style={{ textAlign: 'center' }} id='About'>About</section>
  </div>;
};

export default App;
