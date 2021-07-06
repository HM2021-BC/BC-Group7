import React from "react";
import { Card, Button, Icon, Progress } from "semantic-ui-react";

import Tamacoinchi from "./Tamacoinchi";

import styles from "./styles/PetList.module.css";

export default function PetList() {
  const petlist = [
    {
      owner: "Alex",
      name: "Potato",
      life: 75,
      isMale: true,
      lastTimeFed: 1625555099515 - 25 * 3600 * 1000,
    },
    {
      owner: "Alex",
      name: "Tomato",
      life: 75,
      isMale: false,
      lastTimeFed: 1625555099515,
    },
    {
      owner: "Alex",
      name: "Cucumber",
      life: 75,
      isMale: true,
      lastTimeFed: 1625555099515,
    },
    {
      owner: "Alex",
      name: "Eggplant",
      life: 75,
      isMale: true,
      lastTimeFed: 1625555099515,
    },
    {
      owner: "Alex",
      name: "Banana",
      life: 75,
      isMale: true,
      lastTimeFed: 1625555099515,
    },
    {
      owner: "Alex",
      name: "Strawberry",
      life: 75,
      isMale: false,
      lastTimeFed: 1625555099515,
    },
    {
      owner: "Alex",
      name: "Egg",
      life: 75,
      isMale: false,
      lastTimeFed: 1625555099515,
    },
  ];

  const revive = () => {};

  const checkLifeStatus = (pet) => {
    return new Date().getTime() > pet.lastTimeFed + 24 * 3600 * 1000;
  };

  return (
    <div className={styles.petList}>
      {petlist.map((pet) => {
        return (
          <div className={styles.petList} key={pet.name}>
            <Card className={styles.cardContainer}>
              {!checkLifeStatus(pet) ? (
                <Tamacoinchi isMale={pet.isMale} />
              ) : (
                <img
                  src="https://image.freepik.com/free-vector/gravestone-with-flower-farewell-relative-fresh-grave-flat-vector-illustration_124715-48.jpg"
                  style={{ height: "250px;" }}
                />
              )}
              <Card.Content>
                <Card.Header>{pet.name}</Card.Header>
                <Card.Meta>
                  <span className="date">Owned by {pet.owner}</span>
                </Card.Meta>
                <Progress percent={50} value={Life} indicating />
                <Button
                  icon
                  color={checkLifeStatus(pet) ? "red" : "green"}
                  labelPosition="left"
                  className={styles.button}
                  onClick={revive}
                  disabled={!checkLifeStatus(pet)}
                >
                  <Icon name="flask" />
                  {checkLifeStatus(pet)
                    ? `${pet.name} is dead. Revive ${pet.name}`
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
