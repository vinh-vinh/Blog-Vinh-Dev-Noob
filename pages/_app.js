import React, { useEffect, useState } from "react";
import { Layout } from "../components";
import "../styles/globals.scss";
import { Analytics } from "@vercel/analytics/react";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
