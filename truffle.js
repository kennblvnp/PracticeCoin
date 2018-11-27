var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "power loop already rigid only camp spring choice lunar leopard mom program";
var infura_apikey = "R34FZKF26EAVJSIX9UKMBQVP7A5493Z18M";

module.exports = {
  networks: {
  	development: {
  		host: "127.0.0.1",
  		port: 7545,
  		network_id: "*"
  	},
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey),
      network_id: 3,
      // gas: 4000000,
      // from: "0x0276f1D6e60134C34BD66F77F75DB8Fb5F80fB36",
      gas: 4465030
      // gasPrice: 200000000000
    },
  }
};
