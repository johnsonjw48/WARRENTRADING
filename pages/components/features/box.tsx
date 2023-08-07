import React from "react";
import { IFeature } from "../../../typescript/interfaces/feature.interface";

const FeatureBox: React.FC<IFeature> = ({title, desc, icon}) => {
  return (
    <div className="feature-box">
      <div className="icon">
        <i className={icon}></i>
      </div>
      <div className="feature-body">
        <h5>{title}</h5>
        <p>{desc}</p>
      </div>
    </div>
  )
}

FeatureBox.displayName = "Feature Box";
export default FeatureBox;