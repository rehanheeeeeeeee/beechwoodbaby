import Applayout from "../Layouts/Applayout";
import { store } from "../redux/store";
import "../styles/globals.css";
import { StateProvider } from "redux";

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider store={store}>
      <Applayout>
        <Component {...pageProps} />
      </Applayout>
    </StateProvider>
  );
}

export default MyApp;
