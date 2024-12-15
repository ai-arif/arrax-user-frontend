export const formatAddress = (address, startLength = 4, endLength = 6) => {
  if (!address) return "";
  return `${address.slice(0, startLength)}...${address.slice(-endLength)}`;
};
