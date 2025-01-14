require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.24",
  paths: {
    artifacts : 'token/artifacts',
  },
  networks : {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat : {
      chainId: 1337
    }
  }
};
