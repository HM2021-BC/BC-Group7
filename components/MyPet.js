import React, { useState } from "react";
import { Button, Icon, Progress } from "semantic-ui-react";

import Tamacoinchi from "./Tamacoinchi";
import CreatePetModal from "./CreatePetModal";

import styles from "./styles/MyPet.module.css";

function MyPet({ myPet, createPet, setErrorMessage, feed }) {
  const [open, setOpen] = useState(false);

  const checkLifeStatus = (lastTimeFed) => {
    return new Date().getTime() > lastTimeFed + 24 * 3600 * 1000;
  };

  const calculateLife = (lastTimeFed) => {
    const time = new Date().getTime();
    const diff = time - lastTimeFed;
    if (diff > 24 * 3600 * 1000) return 0;
    const result = 100 - Math.round((diff / 3600 / 1000 / 24) * 100);
    return result;
  };

  return (
    <div>
      {myPet ? (
        <div className={styles.mypet}>
          <Tamacoinchi isMale={myPet.isMale} />
          <div className={styles.mypetInfo}>
            <h2>{`${myPet.name} ⭐️`}</h2>
            <h3>{`${myPet.owner}s Tamacoinchi`}</h3>
            <p className={styles.description}>
              {`${myPet.name} is your Tamacoinchi. Make sure to take good care of ${myPet.name},
              as there is no chance to get another Tamacoinchi!`}
            </p>
            <p>
              <b>Life points:</b>
            </p>
            <Progress
              percent={calculateLife(myPet.lastTimeFed)}
              indicating
              className={styles.progress}
            />
            <Button
              icon
              color="green"
              labelPosition="left"
              className={styles.button}
              onClick={feed}
              disabled={checkLifeStatus(myPet.lastTimeFed)}
            >
              <Icon name="cube" />
              {`Feed ${myPet.name} some cubes 🐶`}
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
