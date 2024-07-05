import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNavbar from './TopNavbar';
import Footer from './Footer';
import Home from './Components/Home';
import Productsrange from './Pages/Productsrange';
import About from './Components/About';
import Gallary from './Components/Gallary';
import Services from './Components/Services';
import ContactUs from './Components/ContactUs';
import Preloader from '../src/Components/Preloader';

const App = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <React.Fragment>
      <Router basename='/'>
        <TopNavbar />
        <div style={{ paddingTop: '120px' }} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Productsrange />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallary />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
};

export default App;
