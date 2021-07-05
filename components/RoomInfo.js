import React from "react";

import styles from "./styles/RoomInfo.module.css";

export default function RoomInfo() {
  return (
    <div className={styles.roomInfo}>
      <div className={styles.row1}>
        <div className={styles.row1Element}>
          <b>Room size:</b> 8 Player
        </div>
        <div className={styles.row1Element}>
          <b>Min. Stake:</b> 0.2ETH
        </div>
      </div>
      <div className={styles.row2}>
        <b>Winner:</b> kartoffelkopf112
      </div>
    </div>
  );
}
