import React from "react";
import { Progress, Message } from "semantic-ui-react";

import PetList from "./PetList";
import MyPet from "./MyPet";

import styles from "./styles/Layout.module.css";

export default function Layout({ pets, myPet, setErrorMesage, createPet }) {
  return (
    <div className={styles.layout}>
      <div className={styles.innerLayout}>
        <h2>My Tamacoinchi</h2>
        <MyPet
          pets={pets}
          myPet={myPet}
          setErrorMessage={setErrorMesage}
          createPet={createPet}
        />
        <h2>All Tamacoinchis</h2>
        <PetList pets={pets} />
      </div>
    </div>
  );
}
