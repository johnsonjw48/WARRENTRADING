import React from 'react'
import AppHead from "./head";
interface ILayout {
  children: JSX.Element;
  props: any;
}
const Layout: React.FC<ILayout> = ({ children, props }) => {
  return (
    <>
      <AppHead title="Homepage 1 | CONSULT App Landing Page"/>
      {children}
    </>
  );
}

export default Layout;