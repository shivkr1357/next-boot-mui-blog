import { Box, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { nodeQuestions } from "../Data/questions";
import { renderHTML } from "../helpers/renderHTML";

const NodeInterview = () => {
  return (
    <Fragment>
      <Typography
        variant="h"
        style={{
          padding: "10px",
          fontWeight: 800,
          fontSize: "22px",
          display: "flex",
          fontFamily: "Roboto",
        }}>
        Node Js Top Interview Questions
      </Typography>

      {nodeQuestions.map((data, key) => {
        return (
          <Stack direction="row" spacing={2} key={key}>
            <Box
              flex={3}
              p={2}
              id="question"
              sx={{ display: "flex", flexDirection: "column" }}>
              <label
                htmlFor="question"
                style={{
                  fontWeight: 900,
                  fontFamily: "Roboto",
                }}>
                <Typography variant="h6">
                  <b>{data.id + "." + data.que}</b>
                </Typography>
              </label>
              <label htmlFor="answer">
                <Typography
                  variant="p"
                  sx={{ fontFamily: "Roboto", paddingTop: "20px" }}>
                  {renderHTML(data.ans)}
                </Typography>
              </label>
            </Box>
          </Stack>
        );
      })}
    </Fragment>
  );
};

export default NodeInterview;
