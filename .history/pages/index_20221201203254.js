import Head from "next/head";
import Image from "next/image";
import About from "../components/Index/About";
import Hero from "../components/Index/Hero";

const styles = {
  container: "",
  wrapper: "p-5",

  heading: "py-5 font-bold text-[4rem] text-headingColor",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beechwood Baby</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Hero />
      <About />
    </div>
  );
}
