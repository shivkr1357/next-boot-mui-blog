import { Box, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { nextJsQuestions } from "../Data/questions";
import { renderHTML } from "../helpers/renderHTML";

const NextInterview = () => {
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
        Next Js Top Interview Questions
      </Typography>

      {nextJsQuestions.map((data, key) => {
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

export default NextInterview;
