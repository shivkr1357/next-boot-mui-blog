import React, { Fragment } from "react";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const DevCards = () => {
  return (
    <Fragment>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
        className={`col-lg-2 ${styles.DevCardsColumns}`}>
        <Link href={"/"} className={styles.linkItem}>
          <div className={`p-3 bg-light ${styles.DevCardsColumnsCard}`}>
            <i
              className="fas fa-sharp fa-regular fa-globe"
              style={{ fontSize: "25px", marginRight: "10px" }}></i>
            Web Development
          </div>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
        className={`col-lg-2 ${styles.DevCardsColumns}`}>
        <Link href={"/"} className={styles.linkItem}>
          <div className={`p-3 bg-light ${styles.DevCardsColumnsCard}`}>
            <i
              className="fas fa-solid fa-mobile"
              style={{ fontSize: "25px", marginRight: "10px" }}></i>
            Mobile Development
          </div>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
        className={`col-lg-2 ${styles.DevCardsColumns}`}>
        <Link href={"/"} className={styles.linkItem}>
          <div className={`p-3 bg-light ${styles.DevCardsColumnsCard}`}>
            <i
              className="fas fa-sharp fa-solid fa-laptop"
              style={{ fontSize: "25px", marginRight: "10px" }}></i>{" "}
            Machine Learning
          </div>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
        className={`col-lg-2 ${styles.DevCardsColumns}`}>
        <Link href={"/"} className={styles.linkItem}>
          <div className={`p-3 bg-light ${styles.DevCardsColumnsCard}`}>
            <i
              className="fa-sharp fa-solid fa-clipboard-question"
              style={{ fontSize: "25px", marginRight: "10px" }}></i>
            Interview Preparation
          </div>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
        className={`col-lg-2 ${styles.DevCardsColumns}`}>
        <Link href={"/"} className={styles.linkItem}>
          <div className={`p-3 bg-light ${styles.DevCardsColumnsCard}`}>
            <i
              className="fa-brands fa-square-facebook"
              style={{ fontSize: "25px", marginRight: "10px" }}></i>
            Facebook Follow
          </div>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.2 } }}
        className={`col-lg-2 ${styles.DevCardsColumns}`}>
        <Link href={"/"} className={styles.linkItem}>
          <div className={`p-3 bg-light ${styles.DevCardsColumnsCard}`}>
            <i
              className="fa-brands fa-youtube"
              style={{ fontSize: "25px", marginRight: "10px" }}></i>
            Youtube Subscribe
          </div>
        </Link>
      </motion.div>
    </Fragment>
  );
};

export default DevCards;
