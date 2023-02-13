import React from "react";
import styles from "@/styles/Home.module.css";

const AboutCard = () => {
  return (
    <div className={`d-flex justify-content-center align-item-center`}>
      <div className={`${styles.aboutCard}`}>
        <h1 className={styles.aboutCardHeading}>A Little About Us</h1>
        <p className={styles.aboutCardText}>
          Hey&#44; Welcome to our website - We make videos about tech&#44;
          tutorials&#44; some interesting attempts of building new Projects.
          Make sure you&apos;re following us on all of the social networks so we
          can stay in touch. We gained some expertise in Web development and
          Mobile Development. Thanks for visiting our website
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
