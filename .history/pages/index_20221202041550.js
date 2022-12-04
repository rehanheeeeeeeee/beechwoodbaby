import Head from "next/head";
import Image from "next/image";
import About from "../components/Index/About";
import Hero from "../components/Index/Hero";
import Fade from "react-reveal/Fade";
import Contact from "../components/Index/Contact";
import LatestProducts from "../components/Index/LatestProducts";

const styles = {
  container: "flex flex-col items-center w-full",
  heading: "py-5 font-bold text-[4rem] text-headingColor",
};

export const getServerSideProps = async (context) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/getLatestProducts`
  );
  const { latestProducts } = await response.json();
  return {
    props: {
      latestProducts: JSON.parse(JSON.stringify(latestProducts)),
    },
  };
};

export default function Home({ latestProducts }) {
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
      <LatestProducts latestProducts={latestProducts} />
      <Fade bottom>
        <div className=" bg-[rgba(0,0,0,0.2)] w-[80vw] h-[1px]"></div>
      </Fade>
      <Contact />
    </div>
  );
}
