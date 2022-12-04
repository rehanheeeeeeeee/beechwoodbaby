import Applayout from "../Layouts/Applayout";
import { store } from "../redux/store";
import "../styles/globals.css";
import { Provider } from "redux-import { connect } from 'react-redux'";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Applayout>
        <Component {...pageProps} />
      </Applayout>
    </Provider>
  );
}

export default MyApp;
