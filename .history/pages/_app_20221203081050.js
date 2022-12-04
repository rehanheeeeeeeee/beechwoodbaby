import Applayout from "../Layouts/Applayout";
import { store } from "../redux/store";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    router.events.on("routeChangeComplete", () => setProgress(100));
    router.events.on("routeChangeStart", () => setProgress(40));
  }, [router]);
  return (
    <div>
      <Provider store={store}>
        <LoadingBar
          color="#ff2d55"
          waitingTime={400}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Applayout>
          <Component {...pageProps} />
        </Applayout>
      </Provider>
    </div>
  );
}

export default MyApp;
