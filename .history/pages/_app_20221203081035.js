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
    // Setting progress to 100 when we have completed the navigation
    // so that loadingbar becomes completed when page loaded

    // This will make our loading bar go directly to 100 percent.
    router.events.on("routeChangeComplete", () => setProgress(100));

    // First loading bar is going to go to 40 then 100 this makes the
    // loading bar be smooth
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
