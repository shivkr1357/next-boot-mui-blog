import Blog from "@/components/Blog/Blog";
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

export default function blog() {
  // console.log(allPosts);

  return (
    <Fragment>
      <Head>
        <title>Blog | ItsIndianGuy</title>
        <meta
          name="description"
          content="Read the best blogs of Javascript get the best experience | We provide data based on our own experience | Start your Web Dev journey by knowing the topmost cheat sheets"
        />
      </Head>
      <section className="container-fluid d-flex">
        <Blog />
        <Blog />
        <Blog />
        <Blog />
      </section>
    </Fragment>
  );
}
