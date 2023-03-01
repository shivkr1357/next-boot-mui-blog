import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Autocomplete,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { useRouter } from "next/router";

// import { auth, db } from "../firebase-config";

import { db } from "../../../firebase/clientApp";
import Head from "next/head";
import { Fragment } from "react";

const WriteComponent = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState([]);
  const [newCategory, setNewCategory] = useState([]);
  const [value, setValue] = useState();

  const categoryCollectionRef = query(
    collection(db, "category"),
    orderBy("created", "desc")
  );

  const postCollectionRef = collection(db, "posts");

  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      desc,
      category: newCategory,
      author: "Shiv Shankar Prasad",
      created: serverTimestamp(),
    });
    router.push("/blog");
  };

  useEffect(() => {
    // if (!localStorage.getItem("isAuth")) {
    //   navigate("/login");
    // }
    const getAllCategory = async () => {
      const data = await getDocs(categoryCollectionRef);

      setCategory(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getAllCategory();
  }, [categoryCollectionRef]);

  return (
    <Fragment>
      <Head>
        <title> Create a Post</title>
        <meta
          name="description"
          content="Create a blog of your choice, Select the category , Enter the title and Write about it. That's how it works"
        />
      </Head>

      <Box flex={4} sx={{ padding: { xs: "0", sm: "50px 20px " } }}>
        <Typography variant="h3" component="h3">
          Create A Post
        </Typography>

        <form style={{ position: "relative", marginTop: "50px" }}>
          <Stack spacing={2}>
            <Autocomplete
              multiple
              id="fixed-tags-demo"
              value={value}
              onChange={(event, newValue) => {
                setNewCategory(newValue);
                setValue(newValue.name);
                // handleChange(newValue);
              }}
              options={category}
              getOptionLabel={(option) => (option.name ? option.name : "")}
              style={{ width: 500 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Categories"
                  placeholder=" Select Category"
                />
              )}
            />

            <Box>
              <TextField
                sx={{ width: "100%" }}
                id="outlined-basic"
                label="Post Title"
                variant="outlined"
                name="title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </Box>

            <Box>
              <TextField
                sx={{ width: "100%" }}
                id="outlined-multiline-flexible"
                label="Post Description"
                multiline
                rows={10}
                name="desc"
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              />
            </Box>
          </Stack>
          <Button
            variant="contained"
            sx={{ marginTop: "20px", marginRight: "20px" }}
            onClick={createPost}>
            Publish
          </Button>
          <Button
            variant="outlined"
            sx={{ marginTop: "20px", marginRight: "20px" }}>
            Cancel
          </Button>
          {/* <Button variant="outlined" color="secondary" sx={{ marginTop: "20px" }}>
            Save Draft
          </Button> */}
        </form>
      </Box>
    </Fragment>
  );
};

export default WriteComponent;
