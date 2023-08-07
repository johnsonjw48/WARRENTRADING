import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { imagePath } from "../../../custom.config";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
const AboutUs: React.FC = () => {
  return (
    <section className="pt-100 pb-70 bg-light about" id="about_us">
      <Container>
       
        <Row className="flex-lg-row-reverse">
          <Col lg={6} className="mb-30">
            <SectionHeader sub="A propos de nous" className="mb-30">
              <><b>Notre passion pour le trading</b> au service de votre réussite financière.</>
            </SectionHeader>
            <p>WarrenTrading est née de la passion pour le trading et la conviction que, avec la bonne formation et le bon soutien, quiconque peut devenir un trader prospère. Nous nous concentrons sur le scalping, le day trading et le swing trading, en offrant des formations dédiées et un accompagnement personnalisé pour chaque style de trading.</p>
           <p>Avec WarrenTrading, vous avez l'opportunité de rejoindre une communauté de traders et de commencer votre voyage de trading avec un partenaire dédié à votre réussite financière.</p>
            <div className="counters mt-30">
              <div className="counter">
                <div className="icon me-15">
                  <i className="uil uil-user text-success"></i>
                </div>
                <div className="text">
                  <h2 className="mb-0">350</h2>
                  <span>Clients</span>
                </div>
              </div>
              <div className="counter">
                <div className="icon me-15">
                  <i className="uil uil-smile text-blue"></i>
                </div>
                <div className="text">
                  <h2 className="mb-0">99%</h2>
                  <span>Satisfaction</span>
                </div>
              </div>
              <div className="counter">
                <div className="icon me-15">
                  <i className="uil uil-trophy text-warning"></i>
                </div>
                <div className="text">
                  <h2 className="mb-0">347</h2>
                  <span>Rentables</span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} className="mb-30">
            <img className="img-fluid" src={imagePath + "trading.jpg"} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
AboutUs.displayName = "About Us";
export default AboutUs;