const networks = {
  11155111: {
    contract: "0x95D59d33E017533b996eAf351cf7428fE7510bc0",
    token: "0x501b2D1E63e36e5Cb9f6E9F40E47Ca8e7892fd49",
    factory: "0x2fD3927d6dDf8586D5336E300e8e8E35EeE7Db2c",
    marketPlace: "0x52d5B5148Dd7Be68174d1EEC5543Cd3b0AB591d5",
  },
};

export const getNetwork = (chainId) => {
  if (chainId === undefined || !networks[chainId]) {
    return networks[11155111];
  }
  return networks[chainId];
};
