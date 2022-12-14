import Head from "next/head";
// import ctl from "@netlify/classnames-template-literals";
import styles from "../styles/Home.module.css";

import github from "super-tiny-icons/images/svg/github.svg";
import stackoverflow from "super-tiny-icons/images/svg/stackoverflow.svg";
import twitter from "super-tiny-icons/images/svg/twitter.svg";
import email from "super-tiny-icons/images/svg/email.svg";
import upwork from "super-tiny-icons/images/svg/upwork.svg";
import google_play from "super-tiny-icons/images/svg/google_play.svg";
import reddit from "super-tiny-icons/images/svg/reddit.svg";

console.log("github", github);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>tberghuis.dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          background:
            "linear-gradient(rgba(212,231,179,1) 0%, rgba(142,198,131,1) 100%)",
        }}
      >
        <main className="flex flex-col justify-center h-screen text-center">
          <p className="mb-[30px] text-2xl font-medium">Thomas Berghuis</p>
          <p className={`${styles.social} mx-8`}>
            <SocialLink
              name="github"
              href="https://github.com/tberghuis"
              src={github.src}
            ></SocialLink>

            <SocialLink
              name="stack overflow"
              href="https://stackoverflow.com/users/95482/tom-berghuis?tab=profile"
              src={stackoverflow.src}
            ></SocialLink>

            <SocialLink
              name="twitter"
              href="https://twitter.com/tom_berghuis"
              src={twitter.src}
            ></SocialLink>

            <SocialLink
              name="email"
              href="mailto:thomas.berghuis@gmail.com"
              src={email.src}
            ></SocialLink>

            <SocialLink
              name="upwork"
              href="https://www.upwork.com/freelancers/~0117ef9bb9b128ae1d"
              src={upwork.src}
            ></SocialLink>

            <SocialLink
              name="google play"
              href="https://play.google.com/store/apps/developer?id=Thomas+Berghuis"
              src={google_play.src}
            ></SocialLink>

            <SocialLink
              name="reddit"
              href="https://www.reddit.com/user/tberghuis/"
              src={reddit.src}
            ></SocialLink>
          </p>
        </main>
      </div>
    </div>
  );
}

// todo name alt
function SocialLink({ name, href, src }) {
  return (
    <a target="_blank" rel="noreferrer" href={href}>
      <img className={styles.dropShadow} src={src} alt={name} />
    </a>
  );
}
