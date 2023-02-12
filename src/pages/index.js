import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Fragment } from "react";
import CarouselComponent from "@/components/LangingPage/CarouselComponent";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>ItsIndianguy</title>
        <meta name="description" content="Homepage for the blog app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`container-fluid ${styles.main}`}>
        <section className="row d-flex justify-content-center p-2">
          <h3 className="d-flex justify-content-center">Projects</h3>
          <CarouselComponent />
        </section>
        <section className="row">
          <div className="col-md-2">Hello there</div>
          <div className="col-md-7">Hello there</div>
          <div className="col-md-2">Hello there</div>
        </section>
      </main>
    </Fragment>
  );
}
