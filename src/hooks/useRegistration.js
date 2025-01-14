import { useState } from 'react';
import { ethers } from 'ethers';
import { useContract } from './useContract';
import { requestAccount } from '../utils/web3Provider';

export const useRegistration = () => {
  const { registrationContract, tokenContract } = useContract();
  const [isLoading, setIsLoading] = useState(false);


  
  const registerUser = async (referrerId, referrerAddress, username) => {
    try {
      // Validate inputs
      if (!referrerId || !referrerAddress || !username) {
        throw new Error("Invalid inputs. Please provide valid referrerId, referrerAddress, and username.");
      }
  
      // Ensure the address is valid
      if (!ethers.utils.isAddress(referrerAddress)) {
        throw new Error("Invalid referrerAddress. Please provide a valid Ethereum address.");
      }
  
      console.log("Inputs:", { referrerId, referrerAddress, username });

      await requestAccount();

      const gasEstimate = await registrationContract.estimateGas.registerUser(
        referrerId,
        referrerAddress,
        username
      );
      console.log("Gas estimate:", gasEstimate.toString());

      const tx = await registrationContract.registerUser(referrerId, referrerAddress, username, {
        gasLimit: gasEstimate.mul(2), 
      });
      console.log("Transaction sent:", tx);
  
      // Wait for receipt
      const receipt = await tx.wait();
      console.log("Transaction receipt:", receipt);
  
      return {
        success: true,
        txHash: receipt.transactionHash,
      };
    } catch (error) {
      console.error("Registration error:", error);
  
      // Decode revert reason (optional)
      if (error.data) {
        try {
          const decodedError = ethers.utils.toUtf8String(error.data);
          console.error("Decoded revert reason:", decodedError);
        } catch (decodeError) {
          console.error("Failed to decode revert reason:", decodeError);
        }
      }
  
      throw error;
    }
  };
  
  const getUserInfo = async (address) => {
    try {
      const userInfo = await registrationContract.getUserInfo();
      return {
        userId: userInfo.userId.toString(),
        referrerId: userInfo.referrerId.toString(),
        referrerAddress: userInfo.referrerAddress,
        registrationTime: userInfo.registrationTime.toString(),
        isRegistered: userInfo.isRegistered,
        referralCount: userInfo.referralCount.toString(),
        username: userInfo.username
      };
    } catch (error) {
      console.error('Error fetching user info:', error);
      throw error;
    }
  };


  const getUserById = async (id) => {
    console.log("GetUserByid", 0);
    try {
      // Call the contract method
      const userInfo = await registrationContract.getUserByReferrerId(id);

      return {
        userId: userInfo[1].toString(), // Second value in Solidity return
        referrerId: id.toString(),     // Pass the input id as referrerId
        referrerAddress: userInfo[0], // First value in Solidity return
        registrationTime: userInfo[2].toString(),
        isRegistered: userInfo[3],
        referralCount: userInfo[4].toString(),
        username: userInfo[5]

      };
    } catch (error) {
      console.error('Error fetching user info:', error);
      throw error;
    }
  };


  // getUserById(1)
  

  return {
    registerUser,
    getUserInfo,
    isLoading,
    getUserById
  };
};