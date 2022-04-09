import './App.css';
import Header  from './Components/HeadersComponent/Header';
import About from './Components/BodyComponents/About';
import Portfolio from './Components/BodyComponents/Portfolio';
import Contact from './Components/BodyComponents/Contact';
import Footer from './Components/BodyComponents/Footer';
function App() {
  return (
    <div>
    <Header />
    <About />
   <Portfolio />
   <Contact />
  <Footer />
   </div>
  );
}

export default App;
