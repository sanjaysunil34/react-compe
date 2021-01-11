import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Grid from './components/Grid';
import Register from './components/Register';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="center" id="courses"><h1>COURSES</h1></div>
      <Grid />
      <Register />
      <About />
      <Footer />
    </div>
  );
}

export default App;
