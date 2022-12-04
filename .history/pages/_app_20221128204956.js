import Applayout from "../Layouts/Applayout";
import "../styles/globals.css";
import "@coreui/coreui/dist/css/coreui.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <Applayout>
      <Component {...pageProps} />
    </Applayout>
  );
}

export default MyApp;
