import NodeInterview from "@/components/Interview/NodeInterview";
import Head from "next/head";
import React, { Fragment } from "react";

const nodeQA = () => {
  return (
    <Fragment>
      <Head>
        <title>Node Js Interview QA | ItsIndianGuy</title>
        <meta
          name="description"
          content="Read the best top 50 Node Js interview questions and get the best experience | We provide data based on our own Interview experience | Start your Web Dev journey by knowing the topmost interview questions"
        />
      </Head>
      <section className="container">
        <div className="row">
          <NodeInterview />
        </div>
      </section>
    </Fragment>
  );
};

export default nodeQA;
