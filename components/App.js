import React, { useState } from "react";
import { Message } from "semantic-ui-react";
import factory from "../ethereum/factory";
import web3 from "../ethereum/web3";

import Header from "./Header";
import Layout from "./Layout";

import styles from "./styles/App.module.css";

export default function App() {
  const initialProps = async () => {
    const pets = await factory.methods.getDeployedPets().call();

    return { pets };
  };

  return (
    <div className={styles.app}>
      <Header />
      <Layout />
      {false && (
        <Message
          error
          header="Oops!"
          content={true && "Dein Mudda hat aufgehört zu treten - Strom weg"}
          className={styles.error}
        />
      )}
    </div>
  );
}
