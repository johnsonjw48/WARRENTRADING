import React from 'react';
import type { AppProps } from 'next/app'
import "../styles/scss/style.scss";
import Layout from './layout/layout'

const MyApp = ({ Component, pageProps }: AppProps, props: any) => {
  return <Layout props={{  }}>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
