import React, { useState } from "react";
import { Message } from "semantic-ui-react";
import factory from "../ethereum/factory";
import web3 from "../ethereum/web3";

import Header from "./Header";
import Layout from "./Layout";
import LoginModal from "./LoginModal";

import { useStateValue } from "../context/StateProvider";

import styles from "./styles/App.module.css";

export default function App() {
  const [{ errorMessage, pets }, dispatch] = useStateValue();

  const login = async () => {
    try {
      const accounts = await web3.eth.requestAccounts().then(console.log());
      console.log(accounts[0]);

      let allPets = await factory.methods.getDeployedPets().call();
      let newPetList = [...allPets];

      newPetList.push({
        owner: "Alex",
        name: "Potato",
        life: 75,
        isMale: true,
        lastTimeFed: 1625555099515 - 25 * 3600 * 1000,
      });

      dispatch({
        type: "SET_PETS",
        pets: newPetList,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: "SET_ERROR_MESSAGE",
        errorMessage: err,
      });
    }
  };

  return (
    <div className={styles.app}>
      <LoginModal login={login} />
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
