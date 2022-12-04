import Head from "next/head";
import Image from "next/image";
import About from "../components/Index/About";
import Hero from "../components/Index/Hero";
import Fade from "react-reveal/Fade";
import Contact from "../components/Index/Contact";
import LatestProducts from "../components/Index/LatestProducts";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import OurProdcuts from "../components/Index/OurProdcuts";

const styles = {
  container: "flex flex-col items-center",
  heading: "py-5 font-bold text-[4rem] text-headingColor",
};

export const getServerSideProps = async (context) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/getLatestProducts`
  );
  const { latestProducts } = await response.json();

  const colRef = collection(db, "categories");
  const snap = await getDocs(colRef);
  const categories = [];
  snap.forEach((doc) => {
    categories.push(doc.data().name);
  });

  return {
    props: {
      latestProducts: JSON.parse(JSON.stringify(latestProducts)),
      categories,
    },
  };
};

export default function Home({ latestProducts, categories }) {
  return (
    <div className={styles.container}>
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
      <OurProdcuts categories={categories} />

      <Fade bottom>
        <div className=" bg-[rgba(0,0,0,0.2)] w-[80vw] h-[1px]"></div>
      </Fade>
      <Contact />
    </div>
  );
}
