import PortfolioComponent from "@/components/Portfolio/PortfolioComponent";
import Head from "next/head";
import React, { Fragment } from "react";

const portfolio = () => {
  return (
    <Fragment>
      <Head>
        <title>Portfolio | ItsIndianguy</title>
        <meta name="description" content="Homepage for the blog app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <PortfolioComponent />
      </main>
    </Fragment>
  );
};

export default portfolio;
