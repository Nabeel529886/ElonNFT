require("dotenv").config();
require("@nomiclabs/hardhat-ethers")

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const { PRIVATE_KEY, HTTP_API_KEY } = process.env


module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      hardhat: {},
      url: HTTP_API_KEY,
      accounts: [`0x${PRIVATE_KEY}`],
    }
  }
};
