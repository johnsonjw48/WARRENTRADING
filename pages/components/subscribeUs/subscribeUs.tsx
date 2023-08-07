import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { imagePath } from "../../../custom.config";
const SubscribeUs: React.FC = () => {
  return (
    <section className="subscribe-section overflow-hidden">
      <div className="container">
        <div className="p-30 bg-light rounded">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-header mb-0">
                <span className="key-point mb-2">Récemment</span>
                <h3 className="fw-normal mb-0"><b>Plus de 100 formations vendues</b> <br /> pour 100 futurs rentables</h3>
              </div>
              <h6 className="text-muted fw-normal my-15">Rejoignez la communauté dès maintenant!</h6>
              <form action="#" className="subscribe-form mb-45">
                <div className="input-box position-relative">
                  <i className="uil uil-envelope icon h5 mb-0 text-muted"></i>
                  <input type="email" placeholder="Entrez votre adresse email" className="form-control bg-white" />
                    <button className="btn btn-success">Nous rejoindre</button>
                </div>
              </form>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <img className="img-fluid mt-sm-0 mt-5"  src={imagePath+"subscribe-img.png"} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

SubscribeUs.displayName = "Subscribe Us";
export default SubscribeUs;