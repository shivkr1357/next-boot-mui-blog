import React from "react";
import styled from "@emotion/styled";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import styles from "@/styles/footer.module.css";

const FooterPart1 = () => {
  const SocialBox = styled(Box)({
    display: "flex",
    gap: 10,
    color: "white",
    paddingTop: 20,
  });
  return (
    <div>
      <SocialBox>
        <a
          className={`${styles.anchorTag} ${styles.facebook}`}
          href="https://www.facebook.com/itsindianguy">
          <Facebook />
        </a>
        <a
          className={`${styles.anchorTag} ${styles.instagram}`}
          href="https://www.instagram.com/itsindianguy/">
          <Instagram />
        </a>

        <a
          className={`${styles.anchorTag} ${styles.twitter}`}
          href="https://twitter.com/itsindianguy/">
          <Twitter />
        </a>
        <a
          className={`${styles.anchorTag} ${styles.quora}`}
          href="https://itsindianguy.quora.com/"
          style={{ fontSize: "24px" }}>
          <i className="fa-brands fa-quora"></i>
        </a>
      </SocialBox>
    </div>
  );
};

export default FooterPart1;
