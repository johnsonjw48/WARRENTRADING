import React from "react";

interface ISectionHeader {
  sub: string;
  children: JSX.Element;
  className?: string;
  center?: boolean;
}
const SectionHeader: React.FC<ISectionHeader> = ({sub, children, className, center}) => {
  return (
    <div className={`section-header${className ? " "+className : ''}${center ? ' text-center' : ''}`}>
      <span className="key-point mb-2 d-inline-block">{sub}</span>
      <h3 className="fw-normal">{children}</h3>
    </div>
  )
}

SectionHeader.displayName = "Section Header Component"
export default SectionHeader;