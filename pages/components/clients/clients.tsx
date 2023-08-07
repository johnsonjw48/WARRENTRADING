import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { imagePath } from "../../../custom.config";
const images = ["brand-logo-1.png", "brand-logo-2.png", "brand-logo-3.png", "brand-logo-4.png"];
const Clients: React.FC = () => {
  return (
    <div className="pb-70 brand-section" id="client">
      <Container>
        <Row>
          {
            images.map((item: string, idx: number) => (
              <Col md={3} xs={6} className="text-center my-15" key={idx}>
                <img className="img-fluid mx-auto brand-logo" src={imagePath+item} alt="" />
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  )
}

Clients.displayName = "Clients";
export default Clients;