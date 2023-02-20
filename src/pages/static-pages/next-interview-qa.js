import NextInterview from "@/components/Interview/NextInterview";
import Head from "next/head";
import React, { Fragment } from "react";

const nextQA = () => {
  return (
    <Fragment>
      <Head>
        <title>Next Js Interview QA | ItsIndianGuy</title>
        <meta
          name="description"
          content="Read the best top 50 Next Js interview questions and get the best experience | We provide data based on our own Interview experience | Start your Web Dev journey by knowing the topmost interview questions"
        />
      </Head>
      <section className="container">
        <div className="row">
          <NextInterview />
        </div>
      </section>
    </Fragment>
  );
};

export default nextQA;
