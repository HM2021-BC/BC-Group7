import React, { useEffect } from "react";
import { Card, Button, Icon, Progress } from "semantic-ui-react";

import Tamacoinchi from "./Tamacoinchi";
import { useStateValue } from "../context/StateProvider";

import styles from "./styles/PetList.module.css";

function PetList({ pets }) {
  useEffect(() => {
    console.log(pets);
  }, [pets]);

  const revive = () => {};

  const checkLifeStatus = (pet) => {
    return new Date().getTime() > pet.lastTimeFed + 24 * 3600 * 1000;
  };

  const calculateLife = (lastTimeFed) => {
    const time = new Date().getTime();
    const diff = time - lastTimeFed;
    if (diff > 24 * 3600 * 1000) return 0;
    const result = 100 - Math.round((diff / 3600 / 1000 / 24) * 100);
    return result;
  };

  return (
    <div className={styles.petList}>
      {pets &&
        pets.map((pet) => {
          return (
            <div className={styles.petList} key={pet.key}>
              <Card className={styles.cardContainer}>
                {!checkLifeStatus(pet) ? (
                  <Tamacoinchi isMale={pet.isMale} />
                ) : (
                  <img
                    src="https://image.freepik.com/free-vector/gravestone-with-flower-farewell-relative-fresh-grave-flat-vector-illustration_124715-48.jpg"
                    style={{ height: "250px" }}
                  />
                )}
                <Card.Content>
                  <Card.Header>{pet.name}</Card.Header>
                  <Card.Meta>
                    <span className="date">
                      Owned by <b>{pet.owner}</b>
                    </span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content>
                  <Card.Description>
                    <b>Life points:</b>
                  </Card.Description>
                  <Progress
                    percent={calculateLife(pet.lastTimeFed)}
                    indicating
                    className={styles.progress}
                  />
                  <Button
                    icon
                    color={checkLifeStatus(pet) ? "red" : "yellow"}
                    labelPosition="left"
                    className={styles.button}
                    onClick={revive}
                    disabled={!checkLifeStatus(pet)}
                  >
                    <Icon name="flask" />
                    {checkLifeStatus(pet)
                      ? `${pet.name} is dead. Revive it`
                      : `${pet.name} is living well 🐶`}
                  </Button>
                </Card.Content>
              </Card>
            </div>
          );
        })}
    </div>
  );
}

export default PetList;
