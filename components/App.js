import React, { useState, useEffect } from "react";
import { Message } from "semantic-ui-react";
import factory from "../ethereum/factory";
import web3 from "../ethereum/web3";

import Header from "./Header";
import Layout from "./Layout";
import LoginModal from "./LoginModal";

import initialState from "../context/initialState";

import styles from "./styles/App.module.css";

export default function App() {
  const [pets, setPets] = useState([]);
  const [myPet, setMyPet] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setPets(initialState.pets);
  }, []);

  useEffect(() => {
    if (errorMessage) alert("An error has occured: " + errorMessage);
  }, [errorMessage]);

  const login = async () => {
    try {
      const accounts = await web3.eth.requestAccounts().then(console.log());
      console.log(accounts[0]);

      let allPets = await factory.methods.getDeployedPets().call();
      setPets(allPets);

      setLoggedIn(true);
    } catch (err) {
      console.log(err);
      setErrorMessage(
        "An error while logging in has occured. Please try again"
      );
    }
  };

  const createPet = (ownerName, name, isMale) => {
    console.log("created");
  };

  return (
    <div className={styles.app}>
      {!loggedIn && <LoginModal login={login} />}
      <Header myPet={myPet} />
      <Layout
        pets={pets}
        myPet={myPet}
        createPet={createPet}
        setErrorMessage={setErrorMessage}
      />
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
