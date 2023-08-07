import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BlogDetailContent from './components/blogDetails/details';
import BlogRightSidebar from './components/blogDetails/rightSidebar';
import Footer from './components/footer/footer';
import NavBar from './components/navbar/navbar';
import Login from './modals/auth/login';
import Register from './modals/auth/register';

const navs = [{
  hash: 'home',
  text: 'Home'
}, {
  hash: 'features',
  text: 'Features'
}, {
  hash: 'about_us',
  text: 'About Us'
}, {
  hash: 'services',
  text: 'Services'
}, {
  hash: 'works',
  text: 'Works'
}, {
  hash: 'pricing',
  text: 'Pricing'
}, {
  hash: 'contact_us',
  text: 'Contact US'
}]
const BlogDetails: React.FC = () => {
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
      <NavBar setShowRegister={setShowRegister} navs={navs} className={isScrolled ? 'sticky' : ''} />
      <section className="section-spacer bg-light">
        <Container>
          <Row>
            <Col lg={8}>
              <BlogDetailContent />
            </Col>
            <Col lg={4}>
              <BlogRightSidebar />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
      <Login showLogin={showLogin} setShowRegister={setShowRegister} setShowLogin={setShowLogin} />
      <Register showRegister={showRegister} setShowLogin={setShowLogin} setShowRegister={setShowRegister} />
    </>
  )
}

BlogDetails.displayName = "Blog Details";
export default BlogDetails;