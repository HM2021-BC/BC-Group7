import React, { useState } from "react";
import {
  Button,
  Icon,
  Header,
  Modal,
  Form,
  Input,
  Select,
} from "semantic-ui-react";

import Tamacoinchi from "./Tamacoinchi";

// import styles from "./styles/CreatePetModal.module.css";

const options = [
  { key: "m", text: "Male", value: true },
  { key: "f", text: "Female", value: false },
];

export default function CreatePetModal({ open, setOpen, createPet, setErrorMessage }) {
  const [isMale, setIsMale] = useState(true);

  const createPetFromForm = (event) => {
    console.log(isMale);
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    try {

      createPet(
        event.target[0].value,
        event.target[1].value,
        isMale,
        new Date().getTime()
        );
        setOpen(false);
      }catch(err) {
        setErrorMessage('An error occured when trying to create a pet. Please check your inputs!');
      }
  };

  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button icon color="green" labelPosition="left" onClick={() => {}}>
            <Icon name="plus" />
            {`Create new Pet 🐶`}
          </Button>
        }
      >
        <Modal.Header>Create a Tamacoinchi</Modal.Header>
        <Modal.Content image>
          <Tamacoinchi isMale={false} />
          <Modal.Description style={{ marginLeft: "80px" }}>
            <Header>Create your Tamacoinchi</Header>
            <Form onSubmit={createPetFromForm}>
              <Form.Field
                control={Input}
                label="Owners name"
                placeholder="Owners name"
              />
              <Form.Field
                control={Input}
                label="Pet name"
                placeholder="Pet name"
              />
              <Form.Field
                label="Select gender"
                control="select"
                onChange={() => setIsMale(!isMale)}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Form.Field>
              <Form.Field control={Button}>Create</Form.Field>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
}
