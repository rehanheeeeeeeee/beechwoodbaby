import { useRouter } from "next/router";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LoadingBar from "react-top-loading-bar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { setBasket } from "../redux/cartSlice";
import { setUser } from "../redux/userSlice";
import { setWishlist } from "../redux/wishlistSlice";

export default function Applayout({ children }) {
  const dispatch = useDispatch();
  const loadingRef = useRef(null);
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
    dispatch(setBasket(JSON.parse(localStorage.getItem("basket"))));
    dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
    dispatch(setWishlist(JSON.parse(localStorage.getItem("wishlistItems"))));
  }, [dispatch, router.events]);
  return (
    <div className="bg-primary">
      <LoadingBar
        color="#f11946"
        ref={loadingRef}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      {children}
      <Footer />{" "}
    </div>
  );
}
