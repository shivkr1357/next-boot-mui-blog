import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";
import styles from "@/styles/footer.module.css";

const FooterPart3 = () => {
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
            navigate("/blog");
            window.scrollTo(0, 0);
          }}>
          Blog
        </InterviewBox>
        <InterviewBox
          className={styles.questionBox}
          onClick={() => {
            navigate("/interview-qa/js-interview-questions");
          }}>
          JavaScript Interview Q/A
        </InterviewBox>
        <InterviewBox
          className={styles.questionBox}
          onClick={() => {
            navigate("/interview-qa/react-js-interview-questions");
            window.scrollTo(0, 0);
          }}>
          React Js Interview Q/A
        </InterviewBox>
        <InterviewBox
          onClick={() => {
            navigate("/interview-qa/node-js-interview-questions");
            window.scrollTo(0, 0);
          }}>
          Node Js Interview Q/A
        </InterviewBox>
      </Box>
    </div>
  );
};

export default FooterPart3;
