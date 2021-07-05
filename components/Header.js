import React, { Component } from "react";
import { Button, Icon, Label } from "semantic-ui-react";

import styles from "./styles/Header.module.css";

export default function Header() {
  const leaveGame = () => { };

  return (
    <div className={styles.header}>
      <Label as="a" image>
        <img src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
        Tamacoinchi by Group 7 🎲
      </Label>
      <Button icon color="red" labelPosition="left" onClick={leaveGame}>
        <Icon name="close" />
        Leave Game
      </Button>
    </div>
  );
}
