import ReactInterview from "@/components/Interview/ReactInterview";
import Head from "next/head";
import React, { Fragment } from "react";

const reactQA = () => {
  return (
    <Fragment>
      <Head>
        <title>React Interview QA | ItsIndianGuy</title>
        <meta
          name="description"
          content="Read the best top 50 Javascript interview questions and get the best experience | We provide data based on our own Interview experience | Start your Web Dev journey by knowing the topmost interview questions"
        />
      </Head>
      <section className="container">
        <div className="row">
          <ReactInterview />
        </div>
      </section>
    </Fragment>
  );
};

export default reactQA;
