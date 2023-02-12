import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Fragment } from "react";
import CarouselComponent from "@/components/LangingPage/CarouselComponent";
import AboutCard from "@/components/LangingPage/AboutCard";
import DevCards from "@/components/LangingPage/DevCards";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>ItsIndianguy</title>
        <meta name="description" content="Homepage for the blog app" />
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
          <div className="col-md-2">Hello there</div>
          <div className="col-md-7">Hello there</div>
          <div className="col-md-2">Hello there</div>
        </section>
      </main>
    </Fragment>
  );
}
