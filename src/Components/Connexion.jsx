import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Navbar from '../Navigation/Nav';
import '../CSS/Connexion.css';

const Connexion = () => {
  const [account, setAccount] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // Check if wallet is already connected
  useEffect(() => {
    const checkConnection = async () => {
      if (window.ethereum) {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const accounts = await provider.listAccounts();
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
        } catch (error) {
          console.error("Failed to check wallet connection");
        }
      }
    };
    checkConnection();
  }, []);

  // Connect wallet function
  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      try {
        const accounts = await provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);
        setErrorMessage(null); // clear any previous errors
      } catch (error) {
        console.error("Wallet connection failed:", error);
        setErrorMessage("Failed to connect wallet. Please try again.");
      }
    } else {
      setErrorMessage("MetaMask is not installed. Please install it to use this feature.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-box">
          <h2>Connect Your Wallet</h2>
          {!account ? (
            <>
              <button onClick={connectWallet} className="login-btn">
                Login with MetaMask
              </button>
              {errorMessage && <p className="error-msg">{errorMessage}</p>}
            </>
          ) : (
            <div className="connected-info">
              <p>Connected Account:</p>
              <p className="account">{account}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Connexion;
