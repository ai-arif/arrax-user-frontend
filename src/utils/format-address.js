export const formatAddress = (address, startLength = 4, endLength = 6) => {
  if (!address || typeof address !== "string") {
    return "";
  }

  if (address.length <= startLength + endLength) {
    return address;
  }

  const start = address.slice(0, startLength);
  const end = address.slice(-endLength);
  return `${start}...${end}`;
};
