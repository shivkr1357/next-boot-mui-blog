import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import styles from "@/styles/footer.module.css";
import { useRouter } from "next/router";

const FooterPart3 = () => {
  const router = useRouter();

  const InterviewBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    cursor: "pointer",
  });

  return (
    <div className="mb-2">
      <Box>
        <Box color={"white"} align={"center"}>
          Categories
        </Box>
        <InterviewBox
          className={styles.questionBox}
          onClick={() => {
            router.push("/blog");
            window.scrollTo(0, 0);
          }}>
          Blog
        </InterviewBox>
        <InterviewBox
          className={styles.questionBox}
          onClick={() => {
            router.push("/static-pages/javacript-qa");
          }}>
          JavaScript Interview Q/A
        </InterviewBox>
        <InterviewBox
          className={styles.questionBox}
          onClick={() => {
            router.push("/static-pages/react-interview-qa");
            window.scrollTo(0, 0);
          }}>
          React Js Interview Q/A
        </InterviewBox>
        <InterviewBox
          onClick={() => {
            router.push("/static-pages/node-interview-qa");
            window.scrollTo(0, 0);
          }}>
          Node Js Interview Q/A
        </InterviewBox>
      </Box>
    </div>
  );
};

export default FooterPart3;
