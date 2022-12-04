import Head from "next/head";
import Image from "next/image";

const styles = {
  container: "my-5",
  wrapper: "p-5",
  delivery:
    "flex items-center rounded-[50px] w-fit bg-orange-100 py-1 px-3 space-x-2",
  heading: "py-3 font-bold text-[2rem] text-headingColor",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beechwood Baby</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.delivery}>
          <p className="font-semibold text-medium text-orange-600">
            Worldwide Delivery
          </p>
          <div className="h-10 flex items-center justify-center w-10 rounded-full shadow-md bg-slate-50">
            <Image
              src={"/delivery.png"}
              width={1920}
              height={1080}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className={styles.heading}>Beechwood Baby</p>
      </div>
      <Image src={"/heroImage2.png"} width={1920} height={1080} alt="" />
    </div>
  );
}
