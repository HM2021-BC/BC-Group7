import React from "react";

import styles from "./styles/Table.module.css";

export default function Table() {
  const dices = [1, 2, 3, 4, 5, 6, "hidden"];

  return (
    <div className={styles.table}>
      <h2>Rolling dices...</h2>
      <div className={styles.diceContainer}>
        <img src={`./${dices[0]}.png`} alt="First Dice" />
        <img src={`./${dices[4]}.png`} alt="First Dice" />
        <img src={`./${dices[6]}.png`} alt="First Dice" />
        <img src={`./${dices[6]}.png`} alt="First Dice" />
      </div>
    </div>
  );
}
