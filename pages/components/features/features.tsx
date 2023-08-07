import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FeaturesData } from "../../../typescript/data/feature";
import { IFeature } from "../../../typescript/interfaces/feature.interface";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import FeatureBox from "./box";

const Feature: React.FC = () => {
  return (
    <section className="pt-100 pb-70" id="features">
      <Container>
        <Row>
          <Col lg={6}>
            <SectionHeader sub="Nos Atouts">
              <><b>Pourquoi choisir WarrenTrading</b> comme partenaire de trading</>
            </SectionHeader>
          </Col>
        </Row>
        <Row>
          {
            FeaturesData.map((item: IFeature, idx: number) => (
              <Col md={6} key={idx} lg={4} className="mb-30">
                <FeatureBox {...item} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}
Feature.displayName = "Features";
export default Feature;