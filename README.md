# Tamacoinchi

Tamacoinchi is a smart contract that allows users to raise their own virtual cute pet. Every transaction is written on the Ethereum blockchain. Feed, pet and raise your new best friend. But be careful: if you're pet starves to death, you have to ask a friend to revive it!

Enjoy!

![Coin image](https://lunchmoney.app/assets/images/shiny-no-shadow.svg)

## Technologies

- Solidity
- Morpheus Labs
- React / Next
- Node.js
- Web3
- Truffle
- MetaMask
- & more

## Installation / Usage

Tamacoinchi is using the same technologies as our sample projects in the blockchain course, therefore the usage is the same.

1. Change truffle.js constants to your own values (e.g. private key)
2. migrate to private network with `migrate all --network private_poa`
3. Start web app with `node server.js` and open the client through the morpheus Visual Studio CDE Services (same as in our lab documents)
4. Connect your MetaMask (same process as in the labs)
5. Login with MetaMask
6. Play

## Tests

Before running the tests, you have to do the following two steps:

1. Set the creatorOfThisContract variable in Tamacoinchi.sol to the last value in the truffle develop public addresses. It is used as a dummy address to receive money.
2. Disable the checkIfSenderAlreadyHasAPet() function call in line 39 of the PetCreator.sol - otherwise most tests will fail. The before() function creates two pets - but that check prevents the same person to create two pets!
