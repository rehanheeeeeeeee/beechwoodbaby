import Applayout from "../Layouts/Applayout";
import { store } from "../redux/store";
import "../styles/globals.css";
import { Provider } from "react-redux";
import Script from "next/script";

export const getServerSideProps = async () => {
  const colRef = collection(db, "categories");
  const snap = await getDocs(colRef);
  const categories = [];
  snap.forEach((doc) => {
    categories.push(doc.data().name);
  });
  return {
    props: {
      categories,
    },
  };
};

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
