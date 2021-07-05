import React from "react";
import RoomInfo from "./RoomInfo";
import Table from "./Table";
import Player from "./Player";
import { Progress, Message } from "semantic-ui-react";

import styles from "./styles/Layout.module.css";

export default function Layout() {
  return (
    <div className={styles.layout}>
      <div className={styles.innerLayout}>
        <Player />
        <Progress percent={50} indicating className={styles.progress} />
        <RoomInfo />
        <Table />
        {true && 
        <Message error header="Oops!" content={true && "Dein Mudda hat aufgehört zu treten - Strom weg"} className={styles.error} />
        }
      </div>
    </div>
  );
}
