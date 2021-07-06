import React, { Component } from "react";
import { Button, Icon, Label } from "semantic-ui-react";

import styles from "./styles/Header.module.css";

export default function Header() {
  const createPet = () => {};
  const login = () => {};

  return (
    <div className={styles.header}>
      <Label as="a" image size="medium">
        <img src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
        Tamacoinchi by Group 7 🐶
      </Label>
      <div className={styles.buttons}>
        <Button icon color="green" labelPosition="left" onClick={createPet}>
          <Icon name="plus" />
          Create Pet
        </Button>
      </div>
    </div>
  );
}
