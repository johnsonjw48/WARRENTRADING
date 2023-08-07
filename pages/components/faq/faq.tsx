import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { FAQs } from "../../../typescript/data/faq";
import { IFAQ } from "../../../typescript/interfaces/faq.interface";
import { imagePath } from "../../../custom.config";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";

const FAQ: React.FC = () => {
	const [activeKey, setActiveKey] = React.useState(0);
	const accorHeaderClick = (event: React.MouseEvent<HTMLButtonElement>, key: number) => {
    const button: HTMLButtonElement = event.target as HTMLButtonElement;
    if (button.parentElement?.classList.contains('collapsed')) {
      button.parentElement?.classList.remove('collapsed')
    }
    else {
      button.parentElement?.classList.add('collapsed')
    }
    setActiveKey(key)
  }
	return (
		<section className="pt-100 pb-70" id="faq">
			<Container>
				<Row className="flex-lg-row-reverse align-items-center">
					<Col lg={6}>
            <SectionHeader sub="Ask Us Anything">
              <>Frequently Asked Question</>
            </SectionHeader>
						<Accordion defaultActiveKey={activeKey.toString()}>
							{
								FAQs.map((faq: IFAQ, idx: number) => (
									<Accordion.Item eventKey={idx.toString()} key={idx}>
										<Accordion.Header as="h6" onClick={(e: React.MouseEvent<HTMLButtonElement>) => accorHeaderClick(e, idx)} className={`pe-pointer ${activeKey === idx ? "" : "collapsed"}`}>
											{faq.header}
										</Accordion.Header>
										<Accordion.Body>{faq.body}</Accordion.Body>
									</Accordion.Item>
								))
							}
						</Accordion>
					</Col>
					<Col lg={6} className="col-lg-6 pe-5">
						<img className="img-fluid" src={imagePath + "faq.svg"} alt="" />
					</Col>
				</Row>
			</Container>
		</section>
	)
}

FAQ.displayName = "Frequently Asked Questions"
export default FAQ