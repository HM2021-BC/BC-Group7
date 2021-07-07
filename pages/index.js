/**
 * @title Tamacoinchi smart contract, raising a virtual pet
 * @author Enis Tola
 * @dev Tamacoinchi is a smart contract that allows users to raise their own virtual cute pet.
 * Every transaction is written on the Ethereum blockchain. Feed, pet and raise your new best friend.
 * But be careful: if you're pet starves to death, you have to ask a friend to revive it!
 * -> This part is the next.js web app on top of said smart contract
 */

import React, { Component } from "react";
import App from "../components/App";

import "semantic-ui-css/semantic.min.css";

export default function RoomIndex() {
  return (
    <div>
      <App />
    </div>
  );
}
