import Head from "next/head";
import Image from "next/image";

const styles = {};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beechwood Baby</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
    </div>
  );
}