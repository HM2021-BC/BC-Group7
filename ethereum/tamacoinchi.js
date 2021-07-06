import web3 from './web3';
import Tamacoinchi from './build/contracts/Tamacoinchi.json';

export default address => {
  return new web3.eth.Contract(Tamacoinchi.abi, address);
};