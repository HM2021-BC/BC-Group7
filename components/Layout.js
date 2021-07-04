import React, { Component } from "react";
import RoomInfo from "./RoomInfo";
import Table from "./Table";
import Player from "./Player";

import styles from "./styles/Layout.module.css";

export default function Layout() {
  return (
    <div className={styles.layout}>
      <div className={styles.innerLayout}>
        <RoomInfo />
        <Table />
        <Player />
      </div>
    </div>
  );
}
