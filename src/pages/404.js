import Head from "next/head";
import styles from "../styles/pages/custom404.module.scss";
import Link from "next/link";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Crypie - Cripto Wallet</title>
        <meta name="description" content="Generated by Crypie" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={styles.Custom404}>
        <h1>Error 404</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link className={styles.home404} href="/">
          back to home page
        </Link>
      </div>
    </>
  );
};

export default Custom404;
