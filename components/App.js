import React, { useState, useEffect } from "react";
import { Message } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Tamacoinchi from "../ethereum/tamacoinchi";
import web3 from "../ethereum/web3";

import Header from "./Header";
import Layout from "./Layout";
import LoginModal from "./LoginModal";

import initialState from "../context/initialState";

import styles from "./styles/App.module.css";

export default function App() {
  const [pets, setPets] = useState([]);
  const [myPet, setMyPet] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setPets(initialState.pets);
  }, []);

  useEffect(() => {
    if (errorMessage) alert("An error has occured: " + errorMessage);
  }, [errorMessage]);

  const getInitialProps = (address) => {
    const tamacoinchi = Tamacoinchi(address);

    const allPets = await tamacoinchi.methods.getSummary().call();

    console.log(allPets);

    /*return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
    };*/
  };

  // getInitialProps();

  const login = async () => {
    try {
      const accounts = await web3.eth.requestAccounts().then(console.log());
      console.log(accounts[0]);
      setAccounts(accounts);

      let allDeployedPets = await factory.methods.getDeployedPets().call();
      console.log(allDeployedPets);

      setLoggedIn(true);
    } catch (err) {
      console.log(err);
      setErrorMessage(
        "An error while logging in has occured. Please try again"
      );
    }
  };

  const createPet = async (ownerName, name, isMale, lastTimeFed) => {
    console.log(ownerName, name, isMale, lastTimeFed);

    try {
      await factory.methods
        .createPet(ownerName, name, isMale, lastTimeFed)
        .send({
          from: accounts[0],
        });

      let allDeployedPets = await factory.methods.getDeployedPets().call();
      console.log(allDeployedPets);
      console.log(allDeployedPets);
    } catch (err) {
      console.log(err);
    }
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
    </div>
  );
}
