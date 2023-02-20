import Head from "next/head";
import React, { Fragment } from "react";
import styles from "@/styles/About.module.css";

const about = () => {
  return (
    <Fragment>
      <Head>
        <title>About | ItsIndianGuy</title>
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-8">
            <h1 className={styles.headingFirst}>About Us</h1>
            <h3 className={styles.headingGrow}>
              We constantly build videos on Youtube &#44; write tech articles
              and teach prople so that they can also create awesome Projects
              from Scratch and grow with us
            </h3>
            <h4 className={styles.headingFour}>
              You can check out all the social media availability of our site
              and the creator so that you can get to know what we do and
              you&apos;ll get to know more about us.
            </h4>
            <h5 className={styles.headingLast}>
              You can follow us on different platform so that you can get daily
              updates on what we do. We share innovative things regularly
            </h5>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default about;
