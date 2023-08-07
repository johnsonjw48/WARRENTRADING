import NextLink from "next/link";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const socialIcons = ["uil-facebook-f", "uil-twitter", "uil-dribbble", "uil-linkedin", "uil-instagram"];
const servicesLinks = ["Business Consultancy", "Digital Marketing", "Market Analysis", "Web Development"]
const aboutLinks = ["Overview", "Why Us", "Awards & Recognitions", "Teams"]
const Footer: React.FC = () => {

  return (
    <footer className="footer" id="footer2">
      <Container>
        <Row>
          <Col sm={6} lg={3} className="mb-45">
            <NextLink href={"/"} passHref>
              <a className="navbar-brand">
                WARRENTRADING
              </a>
            </NextLink>
            <p className="mt-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet
              leo. Mauris feugiat erat tellus.</p>
            <div className="social-icons mt-15">
              {
                socialIcons.map((item: string, idx: number) => (
                  <NextLink href={"/"} key={idx} passHref>
                    <a className={"uil " + item}></a>
                  </NextLink>
                ))
              }
            </div>
          </Col>
          <Col sm={6} lg={3} className="mb-45">
            <h6 className="text-uppercase">Services</h6>
            {/* <ul className="footer-links">
              {
                servicesLinks.map((item: string, idx: number) => (
                  <li key={idx}>
                    <NextLink href={"/"} key={idx} passHref>
                      <a>{item}</a>
                    </NextLink>
                  </li>
                ))
              }
            </ul> */}
          </Col>
          <Col sm={6} lg={3} className="mb-45">
            <h6 className="text-uppercase">A propos de nous</h6>
            {/* <ul className="footer-links">
              {
                aboutLinks.map((item: string, idx: number) => (
                  <li key={idx}>
                    <NextLink href={"/"} passHref>
                      <a>{item}</a>
                    </NextLink>
                  </li>
                ))
              }
            </ul> */}
          </Col>

          <Col sm={6} lg={3} className="mb-45">
            <h6 className="text-uppercase">Contacts</h6>
            <ul className="footer-links">
              <li>
                80 rue de paris<br />
                92120 Clichy, France.
              </li>
              <li>
                <a href="mailto:support@warrentrading.com">support@warrentrading.com</a>
              </li>
              <li>
                +33 01000 555 66 22
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="copyright text-center">
        <Container>
          © 2024. WARRENTRADING. Tous droits réservés.
        </Container>
      </div>
    </footer>
  )
}
Footer.displayName = "Footer";
export default Footer;