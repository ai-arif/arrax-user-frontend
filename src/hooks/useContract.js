import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { CONTRACT_CONFIG } from '../utils/contractConfig';
import { getWeb3Provider } from '../utils/web3Provider';
import registrationABI from '../../ABI/registration.json';
import tokenABI from '../../ABI/token.json';

export const useContract = () => {
  const [registrationContract, setRegistrationContract] = useState(null);
  const [tokenContract, setTokenContract] = useState(null);
  const [signer, setSigner] = useState(null);

  useEffect(() => {
    const initializeContracts = async () => {
      try {
        const provider = getWeb3Provider();
        const signer = provider.getSigner();
        setSigner(signer);

        const registration = new ethers.Contract(
          CONTRACT_CONFIG.REGISTRATION_ADDRESS,
          registrationABI,
          signer
        );

        console.log(registration)
        setRegistrationContract(registration);

        const token = new ethers.Contract(
          CONTRACT_CONFIG.TOKEN_ADDRESS,
          tokenABI,
          signer
        );
        setTokenContract(token);
      } catch (error) {
        console.error('Error initializing contracts:', error);
      }
    };

    initializeContracts();
  }, []);

  return { registrationContract, tokenContract, signer };
};