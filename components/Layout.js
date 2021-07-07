import React from "react";
import PetList from "./PetList";
import MyPet from "./MyPet";

import styles from "./styles/Layout.module.css";

function Layout({ pets, myPet, setErrorMessage, createPet, feed, revive }) {
  return (
    <div className={styles.layout}>
      <div className={styles.innerLayout}>
        <h2>My Tamacoinchi</h2>
        <MyPet
          pets={pets}
          myPet={myPet}
          setErrorMessage={setErrorMessage}
          createPet={createPet}
          feed={feed}
        />
        <h2>All Tamacoinchis</h2>
        <PetList pets={pets} revive={revive} />
      </div>
    </div>
  );
}

export default Layout;
