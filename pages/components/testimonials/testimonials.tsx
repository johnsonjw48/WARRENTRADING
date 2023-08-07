import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
	Navigation
} from 'swiper';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import { Button } from "react-bootstrap";
import { NavigationOptions } from "swiper/types/components/navigation";
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import { imagePath } from "../../../custom.config";
// install Swiper modules
SwiperCore.use([Navigation]);
const Testimonials: React.FC = () => {
	const navigationPrevRef = React.useRef(null)
	const navigationNextRef = React.useRef(null)
	return (
		<section className="pt-100 pb-70">
			<Container>
				<Row className="align-items-center">
					<Col xl={5} lg={6} className="mb-30">
						<SectionHeader sub="Témoignages" className="mb-30">
							<>Que disent nos clients?</>
						</SectionHeader>
						<p className="mb-30">Duis et metus et massa tempus lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ultricies, orci molestie blandit interdum.
						</p>
						<p>ipsum ante pellentesque nisl, eget mollis turpis quam nec eros. ultricies, orci molestie blandit interdum.</p>
						<div className="mt-30 swiper-btn-container">
							<Button variant={""} className="swiper-button-prev me-15" ref={navigationPrevRef}>
								<i className="uil uil-arrow-left" />
							</Button>
							<Button variant={""} className="swiper-button-next" ref={navigationNextRef}>
								<i className="uil uil-arrow-right" />
							</Button>
						</div>
					</Col>
					<Col lg={{ 
						span: 6
					 }} xl={{ 
						offset: 1
					  }} className="mb-30">
						<div className="testimonial-right-content position-relative">
							<div className="quota">
								<i className="uil uil-google-hangouts-alt"></i>
							</div>
							<Swiper slidesPerView={1}
								navigation={{
									prevEl: navigationPrevRef.current,
									nextEl: navigationNextRef.current
								}}
								onSwiper={(swiper) => {
									// Delay execution for the refs to be defined
									// Override prevEl & nextEl now that refs are defined
										(swiper.params.navigation as NavigationOptions).prevEl = navigationPrevRef.current;
										(swiper.params.navigation as NavigationOptions).nextEl = navigationNextRef.current;
								
									// Re-init navigation
									swiper.navigation.destroy()
									swiper.navigation.init()
									swiper.navigation.update()
								}}
								spaceBetween={0} loop={true} className="testimonial-content-wrapper">
								<SwiperSlide className="single-testimonial">
									<p className="testimonial-text">“Praesent scelerisque, odio eu fermentum malesuada, nisi arcu volutpat nisl,
										sit amet convallis nunc turp.”</p>
									<div className="testimonial-author">
										<div className="author-info">
											<img src={imagePath + "author-1.jpg"}  alt="author" className="me-15" />
											<div className="author-name">
												<h6 className="mb-0">John Doe</h6>
												<span className="text-muted">CEO, Alphabet</span>
											</div>
										</div>
										<div className="author-review">
											<ul className="star">
												<li><i className="uil uil-star"></i></li>
												<li><i className="uil uil-star"></i></li>
												<li><i className="uil uil-star"></i></li>
												<li><i className="uil uil-star"></i></li>
												<li><i className="uil uil-star"></i></li>
											</ul>
											<span className="review">( 7 Reviews )</span>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide className="single-testimonial">
									<p className="testimonial-text">“Praesent scelerisque, odio eu fermentum malesuada, nisi arcu volutpat nisl,
										sit amet convallis nunc turp.”</p>
									<div className="testimonial-author">
										<div className="author-info">
											<img src={imagePath + "author-1.jpg"} alt="author"  className="me-15" />
											<div className="author-name">
												<h6 className="mb-0">John Doe</h6>
												<span className="text-muted">CEO, Alphabet</span>
											</div>
										</div>
										<div className="author-review">
											<ul className="star">
												<li><i className="uil uil-star"></i></li>
												<li><i className="uil uil-star"></i></li>
												<li><i className="uil uil-star"></i></li>
												<li><i className="uil uil-star"></i></li>
												<li><i className="uil uil-star"></i></li>
											</ul>
											<span className="review">( 7 Reviews )</span>
										</div>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

Testimonials.displayName = "Testimonials";
export default Testimonials;