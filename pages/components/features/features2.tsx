import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FeaturesData } from "../../../typescript/data/feature";
import { IFeature } from "../../../typescript/interfaces/feature.interface";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import FeatureBox2 from "./box2";

const Feature2: React.FC = () => {
  return (
    <section className="pt-100 pb-70" id="features">
      <Container>
        <Row>
          <Col lg={6}>
            <SectionHeader sub="Our Features">
              <><b>Why Choose Us</b> as your business partner</>
            </SectionHeader>
          </Col>
        </Row>
        <Row>
          {
            FeaturesData.map((item: IFeature, idx: number) => (
              <Col md={6} lg={4} key={idx} className="mb-30">
                <FeatureBox2 {...item} key={idx} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}
Feature2.displayName = "Features2";
export default Feature2;