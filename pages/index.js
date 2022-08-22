import Head from "next/head";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>Thomas Berghuis</p>
        <p>
          <a href="https://github.com/tberghuis">github</a>
          <a href="https://stackoverflow.com/users/95482/tom-berghuis?tab=profile">
            StackOverflow
          </a>
          <a href="https://twitter.com/tom_berghuis">twitter</a>
          <a href="mailto:thomas.berghuis@gmail.com">email</a>
          <a href="https://www.upwork.com/freelancers/~0117ef9bb9b128ae1d">
            upwork
          </a>
          <a href="https://play.google.com/store/apps/developer?id=Thomas+Berghuis">
            play store
          </a>
        </p>
      </main>
    </div>
  );
}
