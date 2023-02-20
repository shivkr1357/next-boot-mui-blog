import { Box, Stack } from "@mui/material";
import Image from "next/legacy/image";
import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <Stack
      p={{ xs: 0, sm: 1, md: 1 }}
      sx={{
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
      direction="row">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </Stack>
  );
};

export default Blog;
