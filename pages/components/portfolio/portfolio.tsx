import React from "react";
import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Shuffle from 'shufflejs';
import { Gallery, Item } from 'react-photoswipe-gallery'
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css';
import { filterNav, gallery } from "../../../typescript/data/gallery";
import { IGallery, IFilterNav } from "../../../typescript/interfaces/gallery.interface";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";

const Portfolio: React.FC = () => {
	// init one ref to store the future isotope object
	const container: React.MutableRefObject<any> = React.useRef(null);
	const [filterKey, setFilterKey] = React.useState('all');
	const [shuffleInstance, setShuffleInstance] = React.useState<Shuffle>();
	React.useEffect(() => {
		if (container.current) {
			const instance = new Shuffle(container.current, {
				itemSelector: '.grid-item',
				sizer: '.filter-nav',
			});
			setShuffleInstance(instance)
		}
	}, [setShuffleInstance])
	// handling filter key change
	React.useEffect(() => {
		if (shuffleInstance) {
			shuffleInstance.filter(filterKey);
		}
	}, [filterKey, shuffleInstance])
	const handleFilterKeyChange = (key: string) => () => setFilterKey(key);
	return (
		<section className="pt-100 pb-70" id="works">
			<Container>
				<Row>
					<Col lg={4} className="col-lg-4">
            <SectionHeader sub="Nos Webinaires">
              <>Dernières Stratégies de Trading</>
            </SectionHeader>
					</Col>
					<Col lg={8} className="col-lg-8">
						<div className="filter-nav text-center text-sm-start text-lg-end pb-20">
							<ul className="list-unstyled">
								{
									filterNav.map((item: IFilterNav, idx: number) => (
										<li key={idx} className={filterKey === item?.key ? 'active' : ''} onClick={handleFilterKeyChange(item?.key)}>{item?.text}</li>
									))
								}
							</ul>
						</div>
					</Col>
				</Row>
				<Row className="grid" ref={container}>
					<Gallery>
						{
							gallery.map((item: IGallery, idx: number) => (
								<Item
									original={item?.big}
									thumbnail={item?.small}
									width="500"
									height="500"
									key={idx}
								>
									{({ ref, open }) => (
										<Col lg={4} sm={6} className="grid-item" key={idx} data-groups={item?.groups}>
											<div className="single-gallery mb-30">
												<div className="gallery-image">
													<img src={item?.small} alt="protfolio" />
												</div>
												<div className="gallery-icon">
													<Button ref={ref as React.MutableRefObject<HTMLButtonElement>} onClick={open} variant="" className="image-popup" data-index={idx}>
														<i className="uil uil-plus"></i>
													</Button>
												</div>
											</div>
										</Col>
									)}
								</Item>
							))
						}
					</Gallery>
				</Row>
			</Container>
		</section>
	)
}

Portfolio.displayName = "Portfolio";
export default Portfolio;