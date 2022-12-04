import React from "react";

const styles = {
  updatePassform: "flex flex-col md:grid md:grid-cols-2 md:gap-x-7  w-full",
};

export default function UpdatePassword() {
  return (
    <form className="mt-4">
      <p className="font-semibold text-xl my-2">1{")"} Update Password</p>
      <div className={styles.updatePassform}></div>
    </form>
  );
}
