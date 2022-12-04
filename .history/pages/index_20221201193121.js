import Head from "next/head";
import Image from "next/image";

const styles = {
  delivery:
    "flex items-center rounded-3xl w-fit bg-card shadow-md py-1 px-2 space-x-2",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beechwood Baby</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div>
        <div className={styles.delivery}>
          <p className="font-semibold text-medium">Worldwide Delivery</p>
          <div className="h-12 w-12 rounded-full shadow-md">
            <Image
              src={"/delivery.png"}
              width={1920}
              height={1080}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      <Image src={"/heroImage2.png"} width={1920} height={1080} alt="" />
    </div>
  );
}
