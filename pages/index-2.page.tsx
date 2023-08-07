import React from 'react';
import AboutUs2 from './components/about/about2';
import Clients from './components/clients/clients';
import FAQ from './components/faq/faq';
import Feature2 from './components/features/features2';
import Footer from './components/footer/footer';
import Home2 from './components/home/home2';
import NavBar from './components/navbar/navbar';
import Pricing from './components/pricing/pricing';
import Services2 from './components/services/services2';
import SubscribeUs from './components/subscribeUs/subscribeUs';
import Testimonials from './components/testimonials/testimonials';
import Login from './modals/auth/login';
import Register from './modals/auth/register';
import ContactUsModal from './modals/contactusModal';


const navs = [{
  hash: 'home',
  text: 'Home'
}, {
  hash: 'features',
  text: 'Features'
}, {
  hash: 'services',
  text: 'Services'
}, {
  hash: 'faq',
  text: 'FAQ'
}, {
  hash: 'pricing',
  text: 'Pricing'
}, {
  hash: 'client',
  text: 'Client'
}]
const Index: React.FC = () => {
  const [showContactUs, setShowContactUs] = React.useState(false);
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
      <NavBar setShowContactUs={setShowContactUs} contactBtn navs={navs} className={`header-light ${isScrolled ? 'sticky' : ''}`}/>
      <Home2 />
      <Feature2 />
      <AboutUs2 />
      <Services2 />
      <SubscribeUs />
      <FAQ />
      <Pricing />
      <Testimonials />
      <Clients />
      <Footer />
      <ContactUsModal showContactUs={showContactUs} setShowContactUs={setShowContactUs} />
    </>
  )
}

export default Index