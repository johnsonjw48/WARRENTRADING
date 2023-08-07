import React from 'react';
import NextHead from 'next/head';
import { imagePath } from '../../custom.config';

interface IHead {
  title: string;
  description?: string;
  children?: JSX.Element;
}
const AppHead: React.FC<IHead> = ({ title }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <meta name="robots" content="noindex, nofollow" />
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="title" content={title || 'Homepage | CONSULT App Landing Page'} />
    <meta name="robots" content="noindex, nofollow" />
    <meta name="author" content="LettStartDesign" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title || 'Homepage | CONSULT App Landing Page'}</title>
    <link rel="shortcut icon" type="image/png" sizes="32x32" href={imagePath + "favicon.ico"} />
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v3.0.6/css/line.css" />
  </NextHead>
);

export default AppHead