import Head from "next/head";
import Image from "next/image";
import About from "../components/Index/About";
import Hero from "../components/Index/Hero";
import Fade from "react-reveal/Fade";
import Contact from "../components/Index/Contact";

const styles = {
  container: "flex flex-col items-center",
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
      <Fade bottom>
        <div className=" bg-[rgba(0,0,0,0.2)] w-[80vw] h-[1px]"></div>
      </Fade>
      <About />
      <Fade bottom>
        <div className=" bg-[rgba(0,0,0,0.2)] w-[80vw] h-[1px]"></div>
      </Fade>
      <Fade bottom>
        <div className=" bg-[rgba(0,0,0,0.2)] w-[80vw] h-[1px]"></div>
      </Fade>
      <Contact />
    </div>
  );
}
