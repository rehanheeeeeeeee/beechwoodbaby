import Image from "next/image";
import React from "react";
import { Fade } from "react-reveal";

const styles = {
  container: "p-7 grid grid-cols-1 md:grid-cols-2 w-full",
};

export default function About() {
  return (
    <section className="body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative">
        <Fade left>
          <div className="lg:max-w-lg lg:w-full md:w-[60%] w-5/6">
            <Image
              width={1920}
              height={1080}
              className="object-cover object-center w-full h-full rounded"
              alt="hero"
              src={"/about.jpg"}
            />
          </div>
        </Fade>
        <Fade right>
          <div className={styles.delivery}>
            <p className="text-headingColor font-semibold text-md">
              Worldwide Delivery
            </p>
            <div className="h-10 w-10 bg-slate-50 shadow-md rounded-full">
              <Image
                alt=""
                width={1920}
                height={1080}
                className=""
                src={"/delivery.png"}
              />
            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 pt-7 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font font-bold mb-4 md:text-[4rem] text-[3rem] text-headingColor">
              Beechwood Baby
            </h1>
            <p className="mb-8 text-texxtColor leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
}
