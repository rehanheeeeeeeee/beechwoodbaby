import Applayout from "../Layouts/Applayout";
import { store } from "../redux/store";
import "../styles/globals.css";
import { Provider } from "react-redux";
import LoadingBar from "react-top-loading-bar";
import { useRef } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const loadingRef = useRef(null);
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    router.events.on("routeChangStart", () => setProgress(100));
  });
  return (
    <Provider store={store}>
      <LoadingBar
        color="#2e2e2e"
        ref={loadingRef}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Applayout>
        <Component {...pageProps} />
      </Applayout>
    </Provider>
  );
}

export default MyApp;
