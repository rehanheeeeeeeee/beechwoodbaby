import Navbar from "../components/Navbar";
import Applayout from "../Layouts/Applayout";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <Applayout>
      <Component {...pageProps} />
    </Applayout>
  );
}

export default MyApp;
