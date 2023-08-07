import React from "react";
import { IServiceBox } from "../../../typescript/interfaces/service.interface";
import { imagePath } from "../../../custom.config";
import { Button } from "react-bootstrap";
import HTMLParser from "html-react-parser";

const ServiceTabPane: React.FC<IServiceBox> = ({title, image, text}) => {
  return (
    <div className="row flex-md-row-reverse align-items-center">
      <div className="col-lg-6">
        <h2 className="fw-normal mb-30">
          {title && HTMLParser(title)}
        </h2>
        {
          text && HTMLParser(text)
        }
        <div className="mt-30">
          <Button variant="success"><span className="align-middle">C'est par ici</span> <i className="uil uil-arrow-right align-middle"></i></Button>
        </div>
      </div>
      <div className="col-lg-6 text-center">
        <img src={imagePath + image} className="img-fluid" alt="" />
      </div>
    </div>
  )
}
ServiceTabPane.displayName = "Service Tab Pane";
export default ServiceTabPane
