import React from "react";
import { Container, Row, Col, Alert, Button, Form } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import SectionHeader from "../../shared/sectionHeader/sectionHeader";
import HTMLParser, { domToReact } from "html-react-parser";
import { liveURL } from "../../../custom.config";

interface IFormData {
	email: string;
	fullname: string;
	message: string;
	subject: string;
}
const ContactUs: React.FC = () => {
	const [message, setMessage] = React.useState<ReturnType<typeof domToReact> | null>(null);
	// form validation rules 
	const validationSchema = Yup.object().shape({
		fullname: Yup.string()
			.required('Full Name is required'),
		email: Yup.string()
			.required('Email is required')
			.email('Email is invalid'),
		subject: Yup.string()
			.required('Subject is required'),
		message: Yup.string()
			.required('Message is required')
	});
	const formOptions = { resolver: yupResolver(validationSchema) };

	// get functions to build form with useForm() hook
	const { register, handleSubmit, reset, formState } = useForm(formOptions);
	const { errors } = formState;
	const onSubmit = async (data: IFormData, e: React.BaseSyntheticEvent<any> | undefined) => {
		const res = await fetch((process.env.NODE_ENV === 'development' ? '' : liveURL)+'/php/contact.php', {
			body: new FormData((e?.target as HTMLFormElement)),
			method: 'POST'
		})
		const result: string = await res.text()
		if (result) {
			setMessage(HTMLParser(result));
			reset();
		}
		return false;
	}
	return (
		<section className="pt-100 pb-70" id="contact_us">
			<Container>
				<SectionHeader sub="Contactez nous" center>
					<>Faisons connaissance</>
				</SectionHeader>
				<Row>
					<Col md={4} className="mb-30">
						<div className="single-contact">
							<div className="contact-icon bg-dark me-15">
								<i className="uil uil-map-marker"></i>
							</div>
							<div className="text">
								<address className="mb-0">
									80 rue de Paris <br />
									92110 Clichy, France.
								</address>
							</div>
						</div>
					</Col>
					<Col md={4} className="mb-30">
						<div className="single-contact">
							<div className="contact-icon bg-primary me-15">
								<i className="uil uil-envelope"></i>
							</div>
							<div className="text">
								<p className="mb-0"><a href="mailto:support@warrentrading.com">support@warrentrading.com</a></p>
								<p className="mb-0"><a href="mailto:editor@warrentrading.com">editor@warrentrading.com</a></p>
							</div>
						</div>
					</Col>
					<Col md={4} className="mb-30">
						<div className="single-contact">
							<div className="contact-icon bg-blue me-15">
								<i className="uil uil-phone-alt"></i>
							</div>
							<div className="text">
								<p className="mb-0">+33 0100141441</p>
								<p className="mb-0">+33 0200141441</p>
							</div>
						</div>
					</Col>
				</Row>
				<Row className="flex-md-row-reverse align-items-center mt-45">
					<Col md={6} className="mb-30 ps-md-5">
						<h2 className="mb-30">Laissez votre message</h2>

						<Form  className="contact-form">
							{
								message && <Alert variant="success">
									{message}
								</Alert>
							}
							<Form.Group className={`form-group mb-30 position-relative ${errors.fullname ? 'invalid-field' : ''}`}>
								<input type="text" {...register('fullname')} name="fullname" className="form-control pe-30" placeholder="Nom" />
								<i className="uil uil-user icon"></i>
							</Form.Group>
							<Form.Group className={`form-group mb-30 position-relative ${errors.email ? 'invalid-field' : ''}`}>
								<input type="text" {...register('email')} name="email" className="form-control pe-30" placeholder="Email" />
								<i className="uil uil-envelope icon"></i>
								{
									errors?.email?.type === 'email' ? <div className="validation-error">{errors.email.message}</div> : <></>
								}
							</Form.Group>
							<Form.Group className={`form-group mb-30 position-relative ${errors.subject ? 'invalid-field' : ''}`}>
								<input type="text" {...register('subject')} name="subject" className="form-control pe-30" placeholder="Sujet" />
								<i className="uil uil-file icon"></i>
							</Form.Group>
							<Form.Group className={`form-group mb-30 position-relative ${errors.message ? 'invalid-field' : ''}`}>
								<textarea cols={30} {...register('message')} name="message" rows={10} className="form-control pe-30" placeholder="Message"></textarea>
								<i className="uil uil-clipboard icon"></i>
							</Form.Group>
							<div className="clearfix text-center">
								<Button variant="success" type="submit">
									<span className="align-middle">Envoyez</span>
									<i className="uil uil-arrow-right align-middle"></i>
								</Button>
							</div>
						</Form>
					</Col>
					<Col md={6} className="mb-30">
						<iframe
							src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=80%20Rue%20de%20Paris%2092110%20Clichy+(WARRENTRADING)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
							width="100%" height="500" className="border-0" allowFullScreen={true}></iframe>
					</Col>
				</Row>
			</Container>
		</section>
	)
}
ContactUs.displayName = "Contact Us";
export default ContactUs;