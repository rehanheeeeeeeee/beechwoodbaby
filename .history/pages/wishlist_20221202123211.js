import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { selectWishlistItems } from "../redux/wishlistSlice";

const styles = {
  heading:
    "text-4xl md:text-[4vw] font-extrabold tracking-wide text-center w-full mt-12 mb-5",
};

export default function Wishlist() {
  const wislistItems = useSelector(selectWishlistItems);
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("wishlistItems")) router.push("/");
  }, [router]);

  return (
    <div className={styles.container}>
      <p className={styles.heading}>My Wishlist</p>
    </div>
  );
}
