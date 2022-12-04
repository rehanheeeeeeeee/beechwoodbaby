import React from "react";

const styles = {
  container: " py-12 w-full px-10",
  heading: "w-full text-left font-semibold text-3xl",
};

const links = [
  <MdCrib className={styles.linkIcon} key={1} />,
  <GiHandBag className={styles.linkIcon} key={2} />,
  <BsHandbagFill className={styles.linkIcon} key={3} />,
  <GiPillow className={styles.linkIcon} key={4} />,
  <IoShirt className={styles.linkIcon} key={5} />,
];

export default function OurProdcuts({ categories }) {
  return (
    <div className={styles.container}>
      <p className={styles.heading}>Our Products</p>
      <div>
        {categories.map((name, index) => (
          <div key={index}>
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
