import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Token from './artifacts/contracts/Token.sol/Token.json';
import './App.css';

const tokenaddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";

function App() {

  const [balance, setBalance] = useState();

  useEffect(() => {
    getBalance();
  }, [])

  const getBalance = async() => {
    if(typeof window.etherum !== 'undefined') {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.contract(tokenaddress, Token.abi, provider);
      const balance = await contract.balanceOf(accounts[0]);
      setBalance(balance / 10**18);
    }
  }

  return (
    <div className="App">
      <p> Vous avez {balance} NBJ </p>
    </div>
  );
}

export default App;
