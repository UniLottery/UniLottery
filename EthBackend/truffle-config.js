// Use HD Wallet Provider, to generate addresses
// from specific mnemonic, to be used on public testnets.
const HDWalletProvider = require("@truffle/hdwallet-provider");

const mnemonic = "bread stage build vocal slide stock live office denial jazz furnace awkward";


// Settings.
module.exports = {
    compilers: {
        solc: {
            version: "0.7.1",
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 9000
                }
            }
        }
    },

    plugins: [
        'truffle-plugin-verify'
    ],
    api_keys: {
        etherscan: "4MDGXVSKI6PSJN92SDX8I21FINUHJ16PWE"
    },

    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*",
            gas: 20000000
        },

        mainnet: {
            provider: function() {
                return new HDWalletProvider(
                    mnemonic, 
                    "https://mainnet.infura.io/v3/866612ffe5a54f7ab1513c1b41ebadaa"
                );
            },
            network_id: 1,
            networkCheckTimeout: 10000000,
            gas: 5500000,
            gasPrice: '45000000000' // 45 GWei.
        },


        rinkeby: {
            provider: function() {
                return new HDWalletProvider(
                    mnemonic, 
                    "https://rinkeby.infura.io/v3/866612ffe5a54f7ab1513c1b41ebadaa", 0, 1000
                );
            },
            network_id: 4,
            networkCheckTimeout: 10000000,
            gasPrice: 5000000000     // 5 GWei
        },

        ropsten: {
            provider: function() {
                return new HDWalletProvider(
                    mnemonic, 
                    "https://ropsten.infura.io/v3/866612ffe5a54f7ab1513c1b41ebadaa"
                );
            },
            network_id: 3,
            networkCheckTimeout: 10000000,
            gasPrice: 2000000000     // 2 GWei
        }
    }
};



