import React from "react";
import { Label, Button, Form, Input } from "semantic-ui-react";

import styles from "./styles/LoginModal.module.css";

export default function LoginModal({ setLoggedIn }) {
  const login = (event) => {
    event.preventDefault();

    console.log("logging in...");
    console.log(event.target[0].value);
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <Label as="a" image>
          <img src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
          DiceGame by Group 7 🎲
        </Label>
        <div className={styles.modalContentExplanation}>
          <h2>Dice Game</h2>
          <p>
            DiceGame is a smart contract that allows users to participate in
            dice gambling without having to fear centralized authorities. Every
            transaction is written on the Ethereum blockchain, cutting out all
            middle men.
          </p>
          <p>
            To join a game, you need to have MetaMask installed. Please enter a
            username below and login with your MetaMask account.
          </p>
        </div>
        <Form className={styles.form} onSubmit={login}>
          <Form.Field control={Input} label="Username" placeholder="username" />
          <Button type="submit" primary>
            Login with MetaMask
          </Button>
        </Form>
      </div>
    </div>
  );
}
