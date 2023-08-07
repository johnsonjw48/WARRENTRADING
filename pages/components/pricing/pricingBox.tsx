import React from "react";
import { IPricingBox } from "../../../typescript/interfaces/pricing.interface";

const PricingBox: React.FC<IPricingBox> = ({ preText, recommanded, features, price, cible, duration }) => {
  return (
    <div className={`pricing-box ${recommanded ? 'recommanded' : ''} text-center border-radius-2x`}>
      <h5 className="text-uppercase pre-text position-relative">{preText}</h5>
      <div className={preText === 'TRADER' ? "fst-italic footnotesize mb-3 text-white" : "fst-italic footnotesize mb-3 text-secondary"}>{cible}</div>
      <h2 className="h1 mb-0 price">{price} <sup>&euro;</sup></h2>
      <h6 className="text-uppercase text-muted mb-0">{duration}</h6>
      <ul className="mt-30 list-unstyled">
        {
          features && features.map((item: string, idx: number) => (
            <li className="py-2" key={idx}><span className="icon me-2"></span> {item} </li>
          ))
        }
      </ul>
      <a href="file:///C:/Users/jjohnson/Desktop/Perso/test/test.html" className="btn btn-success mt-30">
        <span className="align-middle">Commencer </span>
        <i className="uil uil-arrow-right align-middle"></i>
      </a>
    </div>
  )
}

PricingBox.displayName = "Pricing Box";
export default PricingBox;