import React from 'react';
import AboutUs from './components/about/about';
import Clients from './components/clients/clients';
import ContactUs from './components/contactUs/contactUs';
import Feature from './components/features/features';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import NavBar from './components/navbar/navbar';
import News from './components/news/news';
import Portfolio from './components/portfolio/portfolio';
import Pricing from './components/pricing/pricing';
import Services from './components/services/services';
import SubscribeUs from './components/subscribeUs/subscribeUs';
import Testimonials from './components/testimonials/testimonials';
import Login from './modals/auth/login';
import Register from './modals/auth/register';

const navs = [{
  hash: 'home',
  text: 'Acceuil'
}, {
  hash: 'features',
  text: 'Nos Atouts'
}, {
  hash: 'about_us',
  text: 'A propos'
}, {
  hash: 'services',
  text: 'Services'
}, {
  hash: 'works',
  text: 'Webinaire'
}, {
  hash: 'pricing',
  text: 'Tarifs'
}, {
  hash: 'contact_us',
  text: 'Contactez nous'
}]
const Index: React.FC = () => {
  const [showRegister, setShowRegister] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);
  // Detect if user is scorlled down (used for add/disable extra large navbar)
  const userIsScrolled = React.useCallback(() => {
    if (window.pageYOffset > 80) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }, []);
  React.useEffect(() => {
    window.addEventListener("scroll", userIsScrolled);
    return () => {
      window.removeEventListener("scroll", userIsScrolled);
    }
  }, [userIsScrolled])
  return (
   <>
    <NavBar setShowRegister={setShowRegister} navs={navs}  className={isScrolled ? 'sticky' : ''}/>
    <Home />
    <Feature />
    <AboutUs />
    <Services />
    <SubscribeUs />
    <Portfolio />
    <Pricing />
    <Testimonials />
    <News />
    <ContactUs />
    <Clients />
    <Footer />
    <Login showLogin={showLogin} setShowRegister={setShowRegister} setShowLogin={setShowLogin}/>
    <Register showRegister={showRegister} setShowLogin={setShowLogin} setShowRegister={setShowRegister}/>
   </>
  )
}

export default Index