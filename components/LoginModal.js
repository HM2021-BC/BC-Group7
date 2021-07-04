import React, { Component } from "react";
import { Label } from "semantic-ui-react";

import styles from "./styles/LoginModal.module.css";

export default function LoginModal({ loggedIn, setLoggedIn }) {
  const login = () => {};

  return (
    <div className={styles.modal} onClick={setLoggedIn(true)}>
      <div className={styles.modalContent}>
        <Label as="a" image>
          <img src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
          DiceGame by Group 7 🎲
        </Label>
        <div>Explanation</div>
        <div>Buttons</div>
      </div>
    </div>
  );
}
