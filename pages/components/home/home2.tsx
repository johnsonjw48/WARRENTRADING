import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { imagePath } from "../../../custom.config";
import YouTube from 'react-youtube';
const Home2: React.FC = () => {
  const [isOpen, setOpen] = React.useState(false)
  return (
    <section className="home-banner fullscreen bg-light" id="home">
      <Container>
        <Row className="align-items-center text-center text-lg-start">
          <Col lg={6} className="mb-30">
            <h6 className="text-success mb-3">Connect With People</h6>
            <h1 className="fw-normal mb-45">
              We Are The Best Creative <span className="line">Digital</span> <span className="line">Agency</span>
            </h1>
            <p className="mb-45">Lorem ipsum dolor sit amet consectetur adipisicing elit maxime vitae labore
              aliquam odit est illo ducimus, dolores neque expedita. Lorem ipsum dolor sit amet consectetur</p>
            <div className="play-box justify-content-center justify-content-lg-start">
              <Button onClick={() => setOpen(true)} className="video-button bg-dark me-15 text-white">
                <i className="uil uil-play"></i>
              </Button>
              <h5 className="mb-0">Play Now</h5>
            </div>
          </Col>
          <Col lg={{
            offset: 1,
            span: 5
          }} className="mb-30 position-relative">
            <img src={imagePath + "home-banner-2.jpg"} className="img-fluid border-radius-2x" alt="" />
            <div className="hero-2-overlay">
              <img className="img-fluid mover-img" src={imagePath + "hero-2-overlay.png"} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
      {
        isOpen && <div className="video-modal">
          <div className="yt-video">
            <Button variant="" className="btn-close" onClick={() => setOpen(false)}>
              <i className="uil uil-times"></i>
            </Button>
            <YouTube videoId="2g811Eo7K8U" />
          </div>
        </div>
      }
    </section>
  )
}

Home2.displayName = "Home2";
export default Home2;