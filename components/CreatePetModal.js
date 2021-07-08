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

function CreatePetModal({ open, setOpen, createPet }) {
  const [isMale, setIsMale] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const createPetFromForm = async (event) => {
    setIsLoading(true);
    try {
      if (event.target[0].value === "" || event.target[1].value === "")
        throw new Error("incorrect inputs");

      await createPet(
        event.target[0].value,
        event.target[1].value,
        isMale,
        new Date().getTime() - 20 * 3600 * 1000
      );
      setOpen(false);
      setIsLoading(false);
    } catch (err) {
      alert(
        "An error occured when trying to create a pet. Please check your inputs!"
      );
      setIsLoading(false);
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
            <Form onSubmit={createPetFromForm} loading={isLoading}>
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

export default CreatePetModal;
