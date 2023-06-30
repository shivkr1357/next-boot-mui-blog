import React, { Fragment } from "react";
import MemeComponent from "@/components/MemeComponent/MemeComponent";
import Head from "next/head";

const memes = () => {
  return (
    <Fragment>
      <Head>
        <title>Memes | ItsIndianguy</title>
        <meta
          name="description"
          content="Top memes of the year, get this and share the memes "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <MemeComponent />
      </main>
    </Fragment>
  );
};

export default memes;
