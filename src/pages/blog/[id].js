import { db } from "../../../firebase/clientApp";
import React, { Fragment } from "react";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { Box, CircularProgress, Stack, Typography } from "@mui/material";
import { ThumbDown, ThumbUp } from "@mui/icons-material";
import { renderHTML } from "@/components/helpers/renderHTML";

import Head from "next/head";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const id = () => {
  // const singlePost = JSON.parse(post);

  // var creation = new Date(singlePost.created.seconds * 1000);
  // const formattedDate = creation.toLocaleDateString("en-IN");
  // const formattedTime = creation.toLocaleString("en-IN", {
  //   hour: "numeric",
  //   minute: "numeric",
  //   hour12: true,
  // });
  // const newDate = `${formattedDate} ${formattedTime}`;

  return (
    <Fragment>
      <Head>
        <title>{`Blog | ItsIndianGuy`}</title>
        <meta
          name="description"
          content={singlePost.desc.substring(0, 200)}
          key="desc"
        />
        <meta property="article:author" content={`Shiv`} />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/itsindianguy/"
        />
        <meta name="robots" content="all" />
      </Head>
      <Stack direction="row">
        <Box flex={1} sx={{ display: { xs: "none", sm: "block" } }}></Box>
        <Box
          flex={4}
          sx={{
            display: { xs: "flex", sm: "flex" },
            width: { xs: "100%", sm: "90%" },
          }}>
          <Stack spacing={2} p={1} sx={{ display: "flex", width: "100%" }}>
            {/* <Box>
              <Image src="" alt="" />
            </Box> */}
            <Box
              sx={{
                cursor: "pointer",
                color: "blue",
                fontSize: "30px",
                fontWeight: 600,
              }}>
              HELLO
              {/* {singlePost.title ? (
                singlePost.title
              ) : (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <CircularProgress sx={{ alignContents: "center" }} />
                </Box>
              )} */}
            </Box>
            <Box
              sx={{
                ":first-letter": { fontSize: "35px" },
                fontSize: "16px",
                whiteSpace: "pre-line",
              }}></Box>
            <Box>
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: "50px",
                  paddingTop: "50px",
                }}>
                <Typography variant="h6"> Was this page helpful? </Typography>
                <ThumbUp sx={{ cursor: " pointer" }} />
                <ThumbDown sx={{ cursor: " pointer" }} />
              </Stack>
            </Box>
          </Stack>
        </Box>
        <Box flex={1} sx={{ display: { xs: "none", sm: "block" } }}></Box>
      </Stack>
    </Fragment>
  );
};

// export const getServerSideProps = async (context) => {
//   var id = context.query["id"];
//   const postCollectionRef = doc(db, "posts", id);
//   const data = await getDoc(postCollectionRef);

//   var post = data.data();

//   var post = JSON.stringify(post);

//   return {
//     props: { post },
//   };
// };

export default id;
