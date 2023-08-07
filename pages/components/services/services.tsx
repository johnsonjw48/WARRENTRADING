import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Nav, Tab } from "react-bootstrap";
import HTMLParser from "html-react-parser";
import { serviceTabs, serviceTabsData } from "../../../typescript/data/services";
import { IServiceBox, IServiceTab } from "../../../typescript/interfaces/service.interface";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import ServiceTabPane from "./serviceTabPane";
const Services: React.FC = () => {
  return (
    <section className="pt-100 pb-70" id="services">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <SectionHeader sub="Nos Services" center>
              <>Nous <b> Proposons des Services Exceptionnels</b> <br className="d-none d-lg-block" />Pour Satisfaire Vos Besoins</>
            </SectionHeader>
          </Col>
        </Row>
        <Tab.Container id="left-tabs-example" defaultActiveKey="business">
          <div className="responsive-tab">
            <Nav defaultActiveKey={serviceTabs[0].key} variant="tabs">
              {
                serviceTabs.map((item: IServiceTab, idx: number) => (
                  <Nav.Item key={idx}>
                    <Nav.Link as="button" eventKey={item?.key}>
                      <i className={`uil ${item?.icon} align-middle me-15`}></i>
                      <span className="ps-lg-1">{HTMLParser(item?.text)}</span>
                    </Nav.Link>
                  </Nav.Item>
                ))
              }
            </Nav>
          </div>
          <Tab.Content className="pt-45">
            {
              serviceTabsData.map((item: IServiceBox, idx: number) => (
                <Tab.Pane key={idx} eventKey={serviceTabs[idx].key}>
                  <ServiceTabPane {...item}/>
                </Tab.Pane>
              ))
            }
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  )
}

Services.displayName = "Services";
export default Services;