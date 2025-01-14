import { ethers } from 'ethers';
import { CONTRACT_CONFIG } from './contractConfig';

export const getWeb3Provider = () => {
  if (typeof window !== 'undefined' && window.ethereum) {
    return new ethers.providers.Web3Provider(window.ethereum);
  }
  return new ethers.providers.JsonRpcProvider(CONTRACT_CONFIG.RPC_URL);
};

export const requestAccount = async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      return accounts[0];
    } catch (error) {
      console.error('Error connecting to MetaMask', error);
      throw new Error('Please connect to MetaMask');
    }
  }
  throw new Error('Please install MetaMask');
};