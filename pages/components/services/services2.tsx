import React from "react";
import { Nav, Tab } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { serviceData } from "../../../typescript/data/services";
import { IServiceBox2 } from "../../../typescript/interfaces/service.interface";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import ServiceBox from "./serviceBox";
const Services2: React.FC = () => {
  return (
    <section className="pt-100 pb-70" id="services">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <SectionHeader sub="Our Services" center>
              <>We <b>Offer Awesome Services</b> <br className="d-none d-lg-block" />That Full Fill Your Needs</>
            </SectionHeader>
          </Col>
        </Row>
        <Row>
          {
            serviceData.map((item: IServiceBox2, idx: number) => (
              <Col key={idx} lg={4} md={6} className="mb-30">
                <ServiceBox {...item} idx={idx} activeIdx={1}/>
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}

Services2.displayName = "Services2";
export default Services2;