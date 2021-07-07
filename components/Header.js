import React, { Component } from "react";
import { Button, Icon, Label } from "semantic-ui-react";

import styles from "./styles/Header.module.css";

export default function Header({ myPet }) {

  return (
    <div className={styles.header}>
      <Label as="a" image size="medium">
        <img src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
        Tamacoinchi by Group 7 🐶
      </Label>
      <h4>v0.1</h4>
    </div>
  );
}
