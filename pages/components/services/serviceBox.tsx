import NextLink from "next/link";
import React from "react";
import { IServiceBox2 } from "../../../typescript/interfaces/service.interface";

const ServiceBox: React.FC<IServiceBox2> = ({ icon, title, desc, idx, activeIdx }) => {
  const boxType: string[] = ["secondary", "warning", "primary", "blue", "info", "success"];
  return (
    <div className={`service-box border-radius-2x ${idx === activeIdx ? 'active' : ''}`}>
      <div className={`icon bg-${boxType[idx ? idx : 0]} text-white`}>
        <i className={`uil ${icon}`}></i>
      </div>
      <div className="service-body">
        <h5 className="my-15">{title}</h5>
        <p>{desc}</p>
        <NextLink href={"/index-2"} passHref>
          <a className="text-dark read-more">
            <span className="align-middle">Read More</span>
            <i className="uil uil-arrow-right align-middle h5"></i>
          </a>
        </NextLink>
      </div>
    </div>
  )
}
ServiceBox.displayName = "Service Box";
export default ServiceBox
