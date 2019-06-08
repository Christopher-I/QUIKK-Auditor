import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && typeof window.web3 !==undefined){
  //we are in the browser and metamask is running.
   web3 = new Web3(window.web3.currentProvider);
   console.log("metamask is running");
}else{
  //we are on the server or the user is not running metamask
 //web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/c3085f6dbf9347358b5ab5d30de1fdbe'
  )
  web3 = new Web3(provider);
  console.log("infura is running");
}


export default web3;