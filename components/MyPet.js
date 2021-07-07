import React, { useState } from "react";
import { Button, Icon, Progress } from "semantic-ui-react";

import Tamacoinchi from "./Tamacoinchi";
import CreatePetModal from "./CreatePetModal";

import styles from "./styles/MyPet.module.css";

function MyPet({ myPet, createPet, setErrorMessage }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {myPet ? (
        <div className={styles.mypet}>
          <Tamacoinchi isMale={true} />
          <div className={styles.mypetInfo}>
            <h2>Bello ⭐️</h2>
            <h3>Albertos Tamacoinchi</h3>
            <p className={styles.description}>
              Bello is your Tamacoinchi. Make sure to take good care of Bello,
              as there is no chance to get another Tamacoinchi!
            </p>
            <p>
              <b>Life points:</b>
            </p>
            <Progress percent={80} indicating className={styles.progress} />
            <Button
              icon
              color="green"
              labelPosition="left"
              className={styles.button}
              onClick={() => {}}
            >
              <Icon name="cube" />
              {`Feed Bello some cubes 🐶`}
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <CreatePetModal
            open={open}
            setOpen={setOpen}
            createPet={createPet}
            setErrorMessage={setErrorMessage}
          />
        </div>
      )}
    </div>
  );
}

export default MyPet;
