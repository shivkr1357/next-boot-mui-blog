import Blog from "@/components/Blog/Blog";
import Head from "next/head";
import React, { Fragment } from "react";

const blog = () => {
  return (
    <Fragment>
      <Head>
        <title>Blog | ItsIndianGuy</title>
        <meta
          name="description"
          content="Read the best blogs of Javascript get the best experience | We provide data based on our own experience | Start your Web Dev journey by knowing the topmost cheat sheets"
        />
      </Head>
      <section className="container-fluid">
        <Blog />
      </section>
    </Fragment>
  );
};

export default blog;
