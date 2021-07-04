/**
 * @title Dice gambling smart contract, demonstration of how a possible decentralized gambling/betting game experience could look like
 * @author Enis Tola
 * @dev DiceGame is a smart contract that allows users to participate in dice gambling without having to fear centralized
 * authorities. Every transaction is written on the Ethereum blockchain, cutting out any kind of middle man
 * -> This part is the next.js web app on top of said smart contract
 */

import React, { Component } from "react";
import App from "../components/App";

import "semantic-ui-css/semantic.min.css";

export default function RoomIndex() {
  /* static async getInitialProps() {
      const campaigns = await factory.methods.getDeployedCampaigns().call();
  
      return { campaigns };
    } */

  return (
    <div>
      <App />
    </div>
  );
}
