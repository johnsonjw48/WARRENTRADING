import React from "react";
import { Alert, Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
interface IFormData {
  email: string;
  password: string;
}
interface IContactUsModal {
  showContactUs: boolean;
  setShowContactUs: (val: boolean) => void;
}
const ContactUsModal: React.FC<IContactUsModal> = ({ showContactUs, setShowContactUs }) => {
  const handleClose = () => setShowContactUs(false);
  const [message, setMessage] = React.useState<string | null>(null);
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
    const res = await fetch('/php/contact.php', {
      body: new FormData((e?.target as HTMLFormElement)),
      method: 'POST'
    })
    const result: string = await res.text()
    if (result) {
      setMessage(result);
      reset();
    }
    return false;
  }
  return (
    <Modal size="lg" className="contact-us-modal" show={showContactUs} onHide={handleClose}>
      <Modal.Header className="align-items-start mb-15">
        <Modal.Title as="h5">Get In Touch</Modal.Title>
        <Button variant="" type="button" className="btn-close" onClick={handleClose}>
          <i className="uil uil-times"></i>
        </Button>
      </Modal.Header>
      <Modal.Body>
        <Form  className="contact-form">
          {
            message && <Alert variant="success">
              {message}
            </Alert>
          }
          <Row>
            <Col md={4}>
              <Form.Group className={`form-group no-icon mb-30 position-relative ${errors.fullname ? 'invalid-field' : ''}`}>
                <input type="text" {...register('fullname')} name="fullname" className="form-control pe-30" placeholder="Your full name" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className={`form-group no-icon mb-30 position-relative ${errors.email ? 'invalid-field' : ''}`}>
                <input type="text" {...register('email')} name="email" className="form-control pe-30" placeholder="Your email here" />
                {
                  errors?.email?.type === 'email' ? <div className="validation-error">{errors.email.message}</div> : <></>
                }
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className={`form-group no-icon mb-30 position-relative ${errors.subject ? 'invalid-field' : ''}`}>
                <input type="text" {...register('subject')} name="subject" className="form-control pe-30" placeholder="Your Subject" />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className={`form-group no-icon mb-30 position-relative ${errors.message ? 'invalid-field' : ''}`}>
                <textarea cols={30} {...register('message')} name="message" rows={10} className="form-control pe-30" placeholder="Your message here"></textarea>
              </Form.Group>
            </Col>
          </Row>
          <div className="clearfix">
            <Button variant="success" type="submit">
              <span className="align-middle">Submit Now</span>
              <i className="uil uil-arrow-right align-middle"></i>
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

ContactUsModal.displayName = 'Contact Us Modal'
export default ContactUsModal;