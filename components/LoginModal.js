import React, { useState } from "react";
import { Button, Icon } from "semantic-ui-react";

import Tamacoinchi from "./Tamacoinchi";
import styles from "./styles/LoginModal.module.css";

function LoginModal({ login }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={styles.loginModalWrapper}>
      <div className={styles.loginModal}>
        <h1>Login to Tamacoinchi</h1>
        <p>
          Login to Tamacoinchi to get a pet, access your existing pet or help a
          friend in need! Join now!
        </p>
        <div className={styles.tamacoinchiWrapper}>
          <Tamacoinchi isMale={true} />
          <Tamacoinchi isMale={false} />
        </div>
        <Button
          icon
          color="yellow"
          labelPosition="left"
          sie="huge"
          className={styles.button}
          onClick={() => login(setIsLoading)}
          loading={isLoading}
        >
          <Icon name="paw" />
          {`Login to Tamacoinchi`}
        </Button>
      </div>
    </div>
  );
}
export default LoginModal;
