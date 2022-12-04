import Navbar from "../components/Navbar";
import Applayout from "../Layouts.js/Applayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Applayout>
      <Component {...pageProps} />
    </Applayout>
  );
}

export default MyApp;
