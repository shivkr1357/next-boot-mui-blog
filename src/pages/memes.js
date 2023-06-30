import React, { Fragment, useEffect, useState } from "react";
import LoadMoreButton from "@/components/Button/LoadMoreButton";
import ImageList from "@/components/ImageList/ImageListItemComp";
import Image from "next/image";
import MemeComponent from "@/components/MemeComponent/MemeComponent";
import Head from "next/head";

const memes = () => {
  return (
    <Fragment>
      <Head>
        <title>Portfolio | ItsIndianguy</title>
        <meta name="description" content="Homepage for the blog app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <MemeComponent />
      </main>
    </Fragment>
  );
};

export default memes;
