import type { NextPage } from "next";
import Head from "next/head";
// import Left from "../components/Left";
import ForCanvas from "../components/ForCanvas";
import styles from "../styles/Home.module.css";
import Spinner from "../components/Spinner";
import { useEffect } from "react";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello World</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Spinner />
        <ForCanvas />
      </main>
    </div>
  );
};

export default Home;