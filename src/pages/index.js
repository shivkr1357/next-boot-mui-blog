import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Fragment } from "react";
import CarouselComponent from "@/components/LangingPage/CarouselComponent";
import AboutCard from "@/components/LangingPage/AboutCard";
import DevCards from "@/components/LangingPage/DevCards";
import PostCards from "@/components/LangingPage/PostCards";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>ItsIndianGuy</title>
        <meta
          name="description"
          content="Read best Interview Questions, Best blog for JavaScript, React Js What are the advantages of React js . React JS Interview Q&A. Node JS Interview Q&A."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
          <div className={styles.postHighlights}>
            <PostCards />
            <PostCards />
            <PostCards />
            <PostCards />
          </div>
        </section>
      </main>
    </Fragment>
  );
}
