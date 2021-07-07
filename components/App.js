import React, { useState, useEffect } from "react";
import factory from "../ethereum/factory";
import Tamacoinchi from "../ethereum/tamacoinchi";
import web3 from "../ethereum/web3";

import Header from "./Header";
import Layout from "./Layout";
import LoginModal from "./LoginModal";
import initialState from "../context/initialState";

import styles from "./styles/App.module.css";

function App() {
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

  const login = async (setIsLoading) => {
    try {
      setIsLoading(true);
      const accounts = await web3.eth.requestAccounts().then(console.log());
      console.log(accounts[0]);
      setAccounts(accounts);

      getAllPets();
      setLoggedIn(true);
      setIsLoading(false);
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

      await getAllPets();
    } catch (err) {
      console.log(err);
    }
  };

  const getAllPets = async () => {
    let allDeployedPets = await factory.methods.getDeployedPets().call();

    const allPets = await Promise.all(
      allDeployedPets.map((element) => {
        const tamacoinchi = Tamacoinchi(element);
        return tamacoinchi.methods.getSummaryOfYourPet().call();
      })
    );

    console.log(allPets);

    const newPetList = allPets.map((item, index) => {
      return {
        key: index,
        ownerAddress: item[0],
        owner: item[1],
        name: item[2],
        isMale: item[3],
        lastTimeFed: item[4],
      };
    });

    console.log(newPetList);
    setPets(newPetList);
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

export default App;
