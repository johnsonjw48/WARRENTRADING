import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
interface IFormData {
  email: string;
  password: string;
  cpassword: string;
}
interface IRegister {
  showRegister: boolean;
  setShowLogin: (val:boolean) => void;
  setShowRegister: (val:boolean) => void;
}
const Register: React.FC<IRegister> = (props) => {
  const {showRegister, setShowLogin, setShowRegister} = props;
  const handleClose = () => setShowRegister(false);


  //open login modal
  const openLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  }
  // form validation rules 
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required'),
    cpassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password')], 'Passwords must match'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid')
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  const onSubmit = async (data: IFormData, e: React.BaseSyntheticEvent<any> | undefined) => {
    reset();
    setShowRegister(false);
    return false;
  }
  return (
    <Modal show={showRegister} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title as="h2" className="mb-15">S'inscrire</Modal.Title>
        <p>Utilisez vos identifiants pour accéder à votre compte.</p>
        <Button variant="" type="button" className="btn-close" onClick={handleClose}>
          <i className="uil uil-times"></i>
        </Button>
        <div className="social-icons justify-content-center">
          <Button variant="" className="social-icon btn-twitter">
            <i className="uil uil-facebook-f"></i>
          </Button>
          <Button variant="" className="social-icon btn-facebook">
            <i className="uil uil-twitter-alt"></i>
          </Button>
          <Button variant="" className="social-icon btn-google">
            <i className="uil uil-google"></i>
          </Button>
        </div>
        <div className="mt-30 or-text text-center">
          <span>OU</span>
        </div>
      </Modal.Header>
      <Modal.Body>
        <Form >
          <Form.Group className={`form-group mb-30 position-relative ${errors.email ? 'invalid-field' : ''}`}>
            <input type="text" {...register('email')} name="email" className="form-control pe-30" placeholder="Votre email" />
            <i className="uil uil-envelope icon"></i>
            {
              errors?.email?.type === 'email' ? <div className="validation-error">{errors.email.message}</div> : <></>
            }
          </Form.Group>
          <Form.Group className={`form-group mb-30 position-relative ${errors.password ? 'invalid-field' : ''}`}>
            <input type="password" {...register('password')} name="password" className="form-control pe-30" placeholder="Votre mot de passe" />
            <i className="uil uil-lock icon"></i>
          </Form.Group>
          <Form.Group className={`form-group mb-15 position-relative ${errors.cpassword ? 'invalid-field' : ''}`}>
            <input type="password" {...register('cpassword')} name="cpassword" className="form-control pe-30" placeholder="Confirmer votre mot de passe" />
            <i className="uil uil-lock icon"></i>
            {
              errors?.cpassword?.type === 'oneOf' ? <div className="validation-error">{errors.cpassword.message}</div> : <></>
            }
          </Form.Group>
          <Form.Group className="mb-30" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Se souvennir de moi" />
          </Form.Group>
          <div className="d-grid">
            <Button variant="success" type="submit">
              S'inscrire
            </Button>
          </div>
        </Form>
        <div className="mt-15 text-center">
        Vous avez déjà un compte? &nbsp;
          <Button variant="link" className="text-primary px-0 text-decoration-none" onClick={openLogin}>Se connecter</Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

Register.displayName = "Register";
export default Register;