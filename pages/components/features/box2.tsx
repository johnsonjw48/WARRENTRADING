import React from "react";
import { IFeature } from "../../../typescript/interfaces/feature.interface";

const FeatureBox2: React.FC<IFeature> = ({title, desc, icon, big}) => {
  return (
    <div className="feature-box-2 border-radius-2x">
      <div className="icon mb-15">
        <i className={icon}></i>
      </div>
      <div className="feature-body">
        <h5>{title}</h5>
        <p>{desc}</p>
      </div>
      {big && <div className="big-icon icon-right"><i className={icon}></i></div>}
    </div>
  )
}

FeatureBox2.displayName = "Feature Box 2";
export default FeatureBox2;