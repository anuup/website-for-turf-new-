import './App.css';
import Body from './components/Body'
import Header from './components/Header';
import Content from './components/Content'
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer'
function App() {
  return (
    <div>
      <Header/>
      <Body/>
      <Content></Content>
     <Pricing></Pricing>
     <Contact></Contact>
     <Testimonial></Testimonial>
     <Footer></Footer>
      
    </div>
  );
}

export default App;
