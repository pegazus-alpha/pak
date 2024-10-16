// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.27",
// };
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: {
    version: "0.8.0", // Version de Solidity
    settings: {
      optimizer: {
        enabled: true, // Active l'optimisation
        runs: 200      // Nombre d'optimisations
      }
    }
  },
  networks: {
    // Configuration pour se connecter à des réseaux de test ou locaux
    hardhat: {
      chainId: 1337 // ID de chaîne par défaut pour Hardhat
    },

  }
};

