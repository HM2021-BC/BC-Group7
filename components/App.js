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
  const [accounts, setAccounts] = useState(null);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [pets, setPets] = useState(null);
  const [myPet, setMyPet] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setPets(initialState.pets);
  }, []);

  const login = async (setIsLoading) => {
    try {
      setIsLoading(true);
      const accounts = await web3.eth.requestAccounts().then(console.log());
      const sessionAccount = await web3.eth.getAccounts();
      setCurrentAccount(sessionAccount);
      setAccounts(accounts);

      getAllPets(sessionAccount[0]);
      setLoggedIn(true);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      alert("An error while logging in has occured. Please try again");
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

  const getAllPets = async (account) => {
    let allPets;
    let allDeployedPets;

    try {
      allDeployedPets = await factory.methods.getDeployedPets().call();

      allPets = await Promise.all(
        allDeployedPets.map((element) => {
          const tamacoinchi = Tamacoinchi(element);
          return tamacoinchi.methods.getSummaryOfYourPet().call();
        })
      );
    } catch (err) {
      console.log(err);
    }

    const newPetList = allPets.map((item, index) => {
      return {
        address: item[0],
        ownerAddress: item[1],
        owner: item[2],
        name: item[3],
        isMale: item[4],
        lastTimeFed: item[5],
      };
    });

    const filteredPetList = [...newPetList];
    filteredPetList.filter((item) => item.ownerAddress != account);
    // filteredPetList.shift();
    setPets(filteredPetList);

    newPetList.map((item) => {
      if (item.ownerAddress === account) {
        setMyPet(item);
      }
    });
  };

  const feed = async () => {
    try {
      const tamacoinchi = Tamacoinchi(myPet.address);
      const time = new Date().getTime();
      console.log(web3.utils.toWei("0.2", "ether"));
      await tamacoinchi.methods.feed(time).send({
        from: currentAccount[0],
        value: web3.utils.toWei("0.1", "ether"),
      });
      console.log("done");
      await getAllPets(currentAccount);
    } catch (err) {
      console.log(err);
    }
  };

  const revive = async (address) => {
    try {
      const tamacoinchi = Tamacoinchi(address);
      const time = new Date().getTime();
      await tamacoinchi.methods.revive(time).send({
        from: currentAccount[0],
        value: web3.utils.toWei("0.2", "ether"),
      });
      console.log("done");
      await getAllPets(currentAccount);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.app}>
      {!loggedIn && <LoginModal login={login} />}
      <Header />
      <Layout
        pets={pets}
        myPet={myPet}
        createPet={createPet}
        setErrorMessage={setErrorMessage}
        feed={feed}
        revive={revive}
      />
    </div>
  );
}

export default App;
