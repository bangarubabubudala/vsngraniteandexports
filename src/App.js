import React from 'react'
import TopNavbar from './TopNavbar'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import Productsrange from './Pages/Productsrange';
import About from './Components/About';
import Gallary from './Components/Gallary';
import Services from './Components/Services';
import ContactUs from './Components/ContactUs';
import Preloader from '../src/Components/Preloader';

const App = () => {

  // this is preloader start
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Change this to the time you want your preloader to show (in ms)

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }
  // end of the preloader


  return (
    <React.Fragment>
      <Router>
        <TopNavbar />
        <div style={{ paddingTop: '120px' }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Productsrange />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallary />} />
          <Route path="/serives" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  )
}

export default App
