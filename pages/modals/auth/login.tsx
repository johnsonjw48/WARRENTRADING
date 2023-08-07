import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
interface IFormData {
  email: string;
  password: string;
}
interface ILogin {
  showLogin: boolean;
  setShowRegister: (val: boolean) => void;
  setShowLogin: (val: boolean) => void;
}
const Login: React.FC<ILogin> = (props) => {
  const { showLogin, setShowRegister, setShowLogin } = props;
  const handleClose = () => setShowLogin(false);

  //open register modal
  const openRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  }
  // form validation rules 
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid')
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  const onSubmit = async (data: IFormData, e: React.BaseSyntheticEvent<any> | undefined) => {
    console.log(data);
    reset();
    setShowLogin(false);
    return false;
  }
  return (
    <Modal show={showLogin} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title as="h2" className="mb-15">Se connecter</Modal.Title>
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
          <div className="d-grid">
            <Button variant="success" type="submit">
              Se connecter
            </Button>
          </div>
        </Form>
        <div className="mt-15 text-center">
          Vous êtes nouveau? &nbsp;
          <Button variant="link" className="text-primary px-0 text-decoration-none" onClick={openRegister}>S'inscrire</Button>
        </div>
      </Modal.Body>
    </Modal>
  )
}

Login.displayName = "Login";
export default Login;