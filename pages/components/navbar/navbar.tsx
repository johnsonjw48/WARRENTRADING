import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import NextLink from "next/link";
import { INavs, INavBar } from "../../../typescript/interfaces/nav.interface";


const NavBar: React.FC<INavBar> = ({ setShowRegister, setShowContactUs, navs, contactBtn, className }) => {
  const showRegister = () => {
    if (setShowRegister) {
      setShowRegister(true)
    }
  }
  const showContactUs = () => {
    if (setShowContactUs) {
      setShowContactUs(true)
    }
  }
  return (
    <header className={`header ${className ? className : ''}`}>
      <Container>
        <Navbar variant="light" expand="lg">
          {/* logo */}
          <NextLink href={"/"} passHref>
            <a className="navbar-brand">
              <span className="projectNameStart">warren</span>
              <span className="projectNameEnd">trading</span>
            </a>
          </NextLink>
          {/* navbar toggler */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
          </Navbar.Toggle>
          {/* menu */}

          <Navbar.Collapse className="sub-menu-bar" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              {
                navs.map((item: INavs, idx: number) => (
                  <li className="nav-item" key={idx}>
                    <ScrollLink activeClass="active" to={item.hash} className="nav-link pe-pointer" spy={true} smooth={true} offset={0} duration={500}>
                      {item.text}
                    </ScrollLink>
                  </li>
                ))
              }
              <li className="nav-item d-sm-none">
                {
                  !contactBtn && <Button variant="primary" size="sm" className="mt-2 mt-lg-0" onClick={showRegister}>Register</Button>
                }
                {
                  contactBtn && <Button variant="primary" size="sm" className="mt-2 mt-lg-0" onClick={showContactUs}>Contact Us</Button>
                }
              </li>
            </ul>
          </Navbar.Collapse>
          {/* language dropdown */}
          <div className="navbar-btn d-none d-sm-flex align-items-center">
            {/* login */}
            {
              !contactBtn && <Button variant="primary" size="sm" onClick={showRegister}>S'inscire</Button>
            }
            {
              contactBtn && <Button variant="primary" size="sm" onClick={showContactUs}>Contact Us</Button>
            }
          </div>
        </Navbar>
      </Container>
    </header>
  )
}

NavBar.displayName = "Nav Bar";
export default NavBar;