import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Fragment } from "react";
import CarouselComponent from "@/components/LangingPage/CarouselComponent";
import AboutCard from "@/components/LangingPage/AboutCard";
import DevCards from "@/components/LangingPage/DevCards";
import PostCards from "@/components/LangingPage/PostCards";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase/clientApp";

// export async function getServerSideProps() {
//   let posts = [];

//   const postCollectionRef = query(
//     collection(db, "posts"),
//     orderBy("created", "desc")
//   );

//   const res = await getDocs(postCollectionRef);
//   res.docs.map((doc) => {
//     posts.push({ ...doc.data(), id: doc.id });
//   });

//   const allPosts = JSON.stringify(posts);

//   return {
//     props: { allPosts },
//   };
// }

export default function Home() {
  // const posts = JSON.parse(allPosts);

  return (
    <Fragment>
      <Head>
        <title>ItsIndianGuy</title>
        <meta
          name="description"
          content="Read best Interview Questions, Best blog for JavaScript, React Js What are the advantages of React js . React JS Interview Q&A. Node JS Interview Q&A."
          key="desc"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://itsindianguy.in/" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7041907309370130"
          crossorigin="anonymous"></script>
      </Head>
      <main className={`container-fluid ${styles.main}`}>
        <section className="row d-flex justify-content-center pl-4 pr-4 pt-4 shadow">
          <h3 className="d-flex justify-content-center">Projects</h3>
          <CarouselComponent />
        </section>
        <section className="row mt-3 pt-2">
          <AboutCard />
        </section>
        <section className="row mt-3 pt-2 ">
          <DevCards />
        </section>
        <section className="row mt-3 p-2">
          <h1>Post Highlights</h1>
          {/* <div className={styles.postHighlights}>
            {posts.map((post, key) => {
              return <PostCards post={post} key={key} />;
            })}
          </div> */}
        </section>
      </main>
    </Fragment>
  );
}
