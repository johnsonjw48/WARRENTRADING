import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { imagePath } from "../../../custom.config";

const Home: React.FC = () => {
  return (
    <section className="home-banner fullscreen bg-1" id="home">
      <Container>
        <Row className="align-items-center text-center text-lg-start">
          <Col lg={6}>
            <h6 className="fw-normal text-success mb-3">Découvrez le Trading Autrement</h6>
            <h1 className="fw-normal mb-30">
              <b>Élevez</b> <span className="projectNameStart fw-bold">votre Trading à</span>  <b> un nouveau Niveau</b>.
            </h1>
            <p className="mb-45"> <span className="projectNameStart fw-bold">WARREN</span><span className="projectNameEnd fw-bold">TRADING</span> est votre passerelle vers une maîtrise réussie du scalping, du day trading et du swing trading. <br/> Nous vous accompagnons vers le succès financier avec des stratégies éprouvées et une communauté dynamique.</p>
            <form action="#" className="subscribe-form mb-45">
              <div className="input-box position-relative">
                <i className="uil uil-envelope icon h5 mb-0 text-muted"></i>
                <input type="email" placeholder="Entrez votre adresse email" className="form-control" />
                <Button variant="success">Inscrivez vous</Button>
              </div>
            </form>
          </Col>
          <Col lg={6}>
            <div className="banner-thumb">
              <img className="hero-img" src={imagePath + "Finance-cuate.svg"}  alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}



Home.displayName = "Home";
export default Home;