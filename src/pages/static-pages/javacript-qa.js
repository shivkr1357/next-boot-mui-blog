import JsInterview from "@/components/Interview/JsInterview";
import Head from "next/head";
import React, { Fragment } from "react";

const javacriptQa = () => {
  return (
    <Fragment>
      <Head>
        <title>JavaScript Interview QA | ItsIndianGuy</title>
        <meta
          name="description"
          content="Read the best top 50 Javascript interview questions and get the best experience | We provide data based on our own Interview experience | Start your Web Dev journey by knowing the topmost interview questions"
        />
      </Head>
      <section className="container">
        <div className="row">
          <JsInterview />
        </div>
      </section>
    </Fragment>
  );
};

export default javacriptQa;
