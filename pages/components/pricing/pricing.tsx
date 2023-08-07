import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { pricings } from "../../../typescript/data/pricing";
import { IPricingBox } from "../../../typescript/interfaces/pricing.interface";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import PricingBox from "./pricingBox";
const Pricing: React.FC = () => {
  return (
    <section className="pt-100 pb-70 bg-light" id="pricing">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <SectionHeader sub="Nos tarifs" center>
              <><b>Des formations accessibles à vie</b> <br />Pour votre succès en trading.</>
            </SectionHeader>
          </Col>
        </Row>
        <Row>
          {
            pricings.map((item: IPricingBox, idx:number) => (
              <Col lg={4} md={6} key={idx} className="mb-30">
                <PricingBox {...item} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}

Pricing.displayName = "Pricing";
export default Pricing;