import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Blogs } from "../../../typescript/data/blog";
import { IBlog } from "../../../typescript/interfaces/blog.interface";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import NewsBox from "./newsBox";
const News: React.FC = () => {
  return (
    <section className="pt-100 pb-70 bg-light" id="news">
      <Container>
        <SectionHeader sub="Notre blog" center>
          <>Derniers articles</>
        </SectionHeader>
        <Row className="justify-content-center">
          {
            Blogs.slice(0,3).map((item: IBlog, idx: number) => (
              <Col md={4} key={idx}>
                <NewsBox {...item} key={idx} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}

News.displayName = "News";
export default News;