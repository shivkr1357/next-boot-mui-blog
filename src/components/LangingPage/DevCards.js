import React, { Fragment } from "react";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";

const DevCards = () => {
  return (
    <Fragment>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
        className={`col-lg-2 ${styles.DevCardsColumns}`}>
        <div className={`p-3 bg-light ${styles.DevCardsColumnsCard}`}>
          <i
            className="fas fa-sharp fa-regular fa-globe"
            style={{ fontSize: "25px", marginRight: "10px" }}></i>
          Web Development
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
        className={`col-lg-2 ${styles.DevCardsColumns}`}>
        <div className={`p-3 bg-light ${styles.DevCardsColumnsCard}`}>
          <i
            className="fas fa-solid fa-mobile"
            style={{ fontSize: "25px", marginRight: "10px" }}></i>
          Mobile Development
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
        className={`col-lg-2 ${styles.DevCardsColumns}`}>
        <div className={`p-3 bg-light ${styles.DevCardsColumnsCard}`}>
          <i
            className="fas fa-sharp fa-solid fa-laptop"
            style={{ fontSize: "25px", marginRight: "10px" }}></i>{" "}
          Machine Learning
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
        className={`col-lg-2 ${styles.DevCardsColumns}`}>
        <div className={`p-3 bg-light ${styles.DevCardsColumnsCard}`}>
          <i
            className="fa-sharp fa-solid fa-clipboard-question"
            style={{ fontSize: "25px", marginRight: "10px" }}></i>
          Interview Preparation
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
        className={`col-lg-2 ${styles.DevCardsColumns}`}>
        <div className={`p-3 bg-light ${styles.DevCardsColumnsCard}`}>
          <i
            className="fa-brands fa-square-facebook"
            style={{ fontSize: "25px", marginRight: "10px" }}></i>
          Facebook Follow
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
        className={`col-lg-2 ${styles.DevCardsColumns}`}>
        <div className={`p-3 bg-light ${styles.DevCardsColumnsCard}`}>
          <i
            className="fa-brands fa-youtube"
            style={{ fontSize: "25px", marginRight: "10px" }}></i>
          Youtube Subscribe
        </div>
      </motion.div>
    </Fragment>
  );
};

export default DevCards;
