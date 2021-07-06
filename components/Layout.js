import React from "react";
import { Progress, Message } from "semantic-ui-react";

import PetList from "./PetList";

import styles from "./styles/Layout.module.css";

export default function Layout() {
  return (
    <div className={styles.layout}>
      <div className={styles.innerLayout}>
        <h2>All Tamacoinchis</h2>
        <PetList />
      </div>
    </div>
  );
}
