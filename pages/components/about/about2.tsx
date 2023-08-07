import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { imagePath } from "../../../custom.config";

const AboutUs2: React.FC = () => {
  return (
    <section className="pt-100 pb-70 bg-light" id="about_us">
      <Container>
        <Row className="flex-lg-row-reverse align-items-center">
          <Col lg={6} className="mb-30">
            <div className="section-header mb-30">
              <h3 className="fw-normal mb-0"><b>Customer support</b> is our main priority for your growth at every stage</h3>
            </div>
            <p className="mb-30">Duis et metus et massa tempus lacinia. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra,
              per inceptos himenaeos. Maecenas ultricies, orci molestie blandit interdum. ipsum ante pellentesque nisl,
              eget mollis turpis quam nec eros. ultricies, orci molestie blandit interdum.</p>
            <div className="row">
              <div className="col-md-6 col-xl-4">
                <div className="about-box bg-white border-radius-1x">
                  <div className="about-head">
                    <i className="uil uil-star me-2 text-warning align-middle"></i>
                    <b className="align-middle text-dark">4.9</b>
                  </div>
                  <div className="about-body">
                    <h6 className="my-2">John Smoth</h6>
                    <p className="fs-13 mb-0">Quaerat eligendi voluptate sapiente reiciendis.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="about-box bg-white border-radius-1x">
                  <div className="about-head">
                    <i className="uil uil-award text-warning me-2 align-middle"></i>
                    <b className="align-middle text-dark">Awards</b>
                  </div>
                  <div className="about-body">
                    <h6 className="my-2">2895+</h6>
                    <p className="fs-13 mb-0">Quaerat eligendi voluptate sapiente reiciendis.</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} className="mb-30">
            <img className="img-fluid" src={imagePath + "about-us-3.png"} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
AboutUs2.displayName = "About Us2";
export default AboutUs2;