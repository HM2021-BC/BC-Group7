import React, { useState } from "react";
import { Message } from "semantic-ui-react";

import Header from "./Header";
import Layout from "./Layout";

import styles from "./styles/App.module.css";

export default function App() {

  return (
    <div className={styles.app}>
      <Header />
      <Layout />
      {true &&
        <Message error header="Oops!" content={true && "Dein Mudda hat aufgehört zu treten - Strom weg"} className={styles.error} />
      }
    </div>
  );
}
