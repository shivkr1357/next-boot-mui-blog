import { Stack } from "@mui/material";
import BlogCard from "./BlogCard";
import React from "react";

const Blog = () => {
  // const allPosts = JSON.parse(posts);

  return (
    <Stack
      p={{ xs: 0, sm: 1, md: 1 }}
      sx={{
        display: "flex",
        width: "100%",
        // flexWrap: "wrap" ,

        // alignItems: "center",
        // justifyContent: "center",
      }}
      direction="row">
      <BlogCard />
    </Stack>
  );
};

export default Blog;
