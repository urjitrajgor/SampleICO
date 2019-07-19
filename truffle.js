/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like truffle-hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
//  */
// const path = require("path");
// contracts_build_directory: path.join(__dirname, "client/src/contracts");
// require('babel-register')
 var HDWalletProvider = require('truffle-hdwallet-provider');
// const infuraKey = "fj4jll3k.....";
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();
//import HDWalletProvider from "truffle-hdwallet-provider";

var mnemonic = "session cluster tourist weather subway minimum gentle cage lion pulse cliff chaos";
var tokenkey = "b9b0ca258ab64114899ed7f71e542668";


module.exports  = {
  // Useful for testing. The `development` name is special - truffle uses it by default
  // if it's defined here and no other network is specified at the command line.
  // You should run a client (like ganache-cli, geth or parity) in a separate terminal
  // tab if you use this network and you must also set the `host`, `port` and `network_id`
  // options below to some value.
  //
  networks: {
  development: {
    host: "127.0.0.1",
    port: 7545,
    network_id: "5777",
  },
  // Another network with more advanced options...
  // advanced: {
  // port: 8777,             // Custom port
  // network_id: 1342,       // Custom network
  // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
  // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
  // from: <address>,        // Account to send txs from (default: accounts[0])
  // websockets: true        // Enable EventEmitter interface for web3 (default: false)
  // },
  // Useful for deploying to a public network.
  // NB: It's important to wrap the provider as a function.
  ropsten: {
    provider: () => new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/v3/' + tokenkey),
    network_id: 3,
    gas: 6500000,
    confirmations: 2,
    timeoutBlocks: 200
    //skipDryRun: true // Skip dry run before migrations? (default: false for public nets )
  },
},
mocha: {
  // timeout: 100000
},
compilers: {
  solc: {
    version: "0.5.0",
  }
}
}