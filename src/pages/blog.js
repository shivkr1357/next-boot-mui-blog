import Blog from "@/components/Blog/Blog";
import BlogCard from "@/components/Blog/BlogCard";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import Head from "next/head";
import React, { Fragment } from "react";
import { db } from "../../firebase/clientApp";

export default function blog({ allPosts }) {
  // console.log(allPosts);
  const posts = JSON.parse(allPosts);

  return (
    <Fragment>
      <Head>
        <title>Blog | ItsIndianGuy</title>
        <meta
          name="description"
          content="Read the best blogs of Javascript get the best experience | We provide data based on our own experience | Start your Web Dev journey by knowing the topmost cheat sheets"
        />
      </Head>
      <section className="container-fluid">
        <div className="d-flex flex-wrap">
          {posts.map((post) => (
            <BlogCard post={post} key={post.id} />
          ))}
        </div>
      </section>
    </Fragment>
  );
}
export async function getStaticProps() {
  let posts = [];

  const postCollectionRef = query(
    collection(db, "posts"),
    orderBy("created", "desc")
  );

  const res = await getDocs(postCollectionRef);
  res.docs.map((doc) => {
    posts.push({ ...doc.data(), id: doc.id });
  });

  const allPosts = JSON.stringify(posts);

  return {
    props: { allPosts },
  };
}
