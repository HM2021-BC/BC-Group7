import React from "react";
import { Label, Form } from "semantic-ui-react";

import styles from "./styles/Player.module.css";

export default function Player() {
  const handleSubmit = () => {};

  return (
    <div className={styles.player}>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Label as="a" image size="big">
            <img src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
            Kartoffelkopf112
          </Label>
          <Form.Input placeholder="18" name="Your guess" />
          <Form.Button content="Bet" primary />
        </Form.Group>
      </Form>
    </div>
  );
}
