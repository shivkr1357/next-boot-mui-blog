import { Stack } from "@mui/material";
import BlogCard from "./BlogCard";
import React from "react";

const Blog = ({ posts }) => {
  const allPosts = JSON.parse(posts);

  return (
    <Stack
      p={{ xs: 0, sm: 1, md: 1 }}
      sx={{
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
      direction="row">
      {allPosts.map((dataPost, key) => {
        return <BlogCard data={dataPost} key={key} />;
      })}
    </Stack>
  );
};

export default Blog;
