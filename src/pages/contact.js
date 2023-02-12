import ContactComponent from "@/components/Contact/ContactComponent";
import Head from "next/head";
import React, { Fragment } from "react";

const contact = () => {
  return (
    <Fragment>
      <Head>
        <title>ItsIndianguy</title>
        <meta name="description" content="Homepage for the blog app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <ContactComponent />
      </main>
    </Fragment>
  );
};

export default contact;
