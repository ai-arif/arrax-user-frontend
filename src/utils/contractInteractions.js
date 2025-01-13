import { ethers } from 'ethers';
import registrationABI from '../ABI/registration.json';
import tokenABI from '../ABI/token.json';

const registrationContractAddress = process.env.NEXT_PUBLIC_REGISTRATION_CONTRACT_ADDRESS;
const tokenContractAddress = process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS;
const rpcUrl = process.env.NEXT_PUBLIC_RPC_URL;

const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

export const getRegistrationContract = (signerOrProvider) => {
  return new ethers.Contract(registrationContractAddress, registrationABI, signerOrProvider);
};

export const getTokenContract = (signerOrProvider) => {
  return new ethers.Contract(tokenContractAddress, tokenABI, signerOrProvider);
};

export const approveTokens = async (signer, amount) => {
  console.log("registration " , registrationContractAddress , tokenContractAddress)
  const tokenContract = getTokenContract(signer);
  const tx = await tokenContract.approve(registrationContractAddress, amount);
  return tx.wait();
};

export const registerUser = async (signer, referrerId, referrerAddress, username) => {
  const registrationContract = getRegistrationContract(signer);
  const tx = await registrationContract.registerUser(referrerId, referrerAddress, username);
  return tx.wait();
};

export const getUserInfo = async (userAddress) => {
  const registrationContract = getRegistrationContract(provider);
  return registrationContract.getUserInfo(userAddress);
};

