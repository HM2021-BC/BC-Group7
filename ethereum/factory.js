import web3 from './web3';
import PetCreator from './build/contracts/PetCreator.json';

const petCreatorAddress = "0x30E59c21c15e1d3193929C05608c602876CD47CA";

const instance = new web3.eth.Contract(PetCreator.abi, petCreatorAddress);

export default instance;