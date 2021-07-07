import React, { Component } from "react";
import { Label } from "semantic-ui-react";

import styles from "./styles/Header.module.css";

function Header() {
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

export default Header;
