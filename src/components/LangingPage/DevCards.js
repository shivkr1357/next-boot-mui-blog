import React, { Fragment } from "react";
import styles from "@/styles/Home.module.css";

const DevCards = () => {
  return (
    <Fragment>
      <div className={`col-lg-2 ${styles.DevCardsColumns}`}>
        <div className={`p-3 bg-light ${styles.DevCardsColumnsCard}`}>
          <i
            className="fas fa-sharp fa-regular fa-globe"
            style={{ fontSize: "25px", marginRight: "10px" }}></i>
          Web Development
        </div>
      </div>
      <div className={`col-lg-2 ${styles.DevCardsColumns}`}>
        <div className={`p-3 bg-light ${styles.DevCardsColumnsCard}`}>
          <i
            className="fas fa-solid fa-mobile"
            style={{ fontSize: "25px", marginRight: "10px" }}></i>
          Mobile Development
        </div>
      </div>
      <div className={`col-lg-2 ${styles.DevCardsColumns}`}>
        <div className={`p-3 bg-light ${styles.DevCardsColumnsCard}`}>
          Machine Learning
        </div>
      </div>
      <div className={`col-lg-2 ${styles.DevCardsColumns}`}>
        <div className={`p-3 bg-light ${styles.DevCardsColumnsCard}`}>
          Interview Preparation
        </div>
      </div>
      <div className={`col-lg-2 ${styles.DevCardsColumns}`}>
        <div className={`p-3 bg-light ${styles.DevCardsColumnsCard}`}>
          Facebook Follow
        </div>
      </div>
      <div className={`col-lg-2 ${styles.DevCardsColumns}`}>
        <div className={`p-3 bg-light ${styles.DevCardsColumnsCard}`}>
          Youtube Subscribe
        </div>
      </div>
    </Fragment>
  );
};

export default DevCards;
