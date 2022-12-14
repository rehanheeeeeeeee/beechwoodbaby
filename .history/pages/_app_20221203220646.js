import Applayout from "../Layouts/Applayout";
import { store } from "../redux/store";
import "../styles/globals.css";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";
import { useEffect, useState } from "react";
import DashboardLayout from "../Layouts/DashboardLayout";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [showChild, setShowChild] = useState(false);
  const pathName = router.pathname;

  useEffect(() => {
    setShowChild(true);
  }, []);
  useEffect(() => {
    router.events.on("routeChangeComplete", () => setProgress(100));
    router.events.on("routeChangeStart", () => setProgress(40));
  }, [router]);

  if (!showChild) {
    return null;
  }
  return (
    <div>
      <Provider store={store}>
        <LoadingBar
          color="#2e2e2e"
          waitingTime={400}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        {pathName.includes("dashboard") ? (
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        ) : (
          <Applayout>
            <Component {...pageProps} />
          </Applayout>
        )}
      </Provider>
    </div>
  );
}

export default MyApp;
