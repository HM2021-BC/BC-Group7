import React from "react";

import styles from "./styles/Tamacoinchi.module.css";

export default function Tamacoinchi({ isMale }) {
  const images = [
    "https://lunchmoney.app/assets/images/ruby-no-shadow.svg",
    "https://lunchmoney.app/assets/images/shiny-no-shadow.svg",
  ];

  return (
    <div className={styles.tamacoinchi}>
      <img
        src={`https://lunchmoney.app/assets/images/${
          isMale ? "shiny" : "ruby"
        }-no-shadow.svg`}
      />
      <div className={styles.shadow}></div>
    </div>
  );
}
