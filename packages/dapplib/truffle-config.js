require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drop tail solution mansion creek stick mad imitate private foster tomorrow'; 
let testAccounts = [
"0x56fcfaa43b0a35cc704bc1d67845a2ed5544f2bde276dddb3f09abcd5ef5c5de",
"0x969b60ac38a2656e76a09f1e68508a90be862518d45bbd6a67ab8a5b9cd669a3",
"0xcaa2b0993b3fa8887d91cd7831fcfc9122a61e79dc0c1b0a780ab2bdb153917e",
"0x454b7757d2ece1ceed445c5c6463bbb014568c6f569fc4e06ff784c94b76f691",
"0xf89ff3ffdf7636b2d9a883ae1da016e161457b16527149cb6ca9eff25771154d",
"0x3011ff8dc5f6d94b95a1ce22154b17800b956a86a9cd34e33bef4f3da10d5030",
"0x9f32c0de790945822321344c67f3a2342bdc581b7417dbc2c6b7b6122a084d8f",
"0x64e67b675bd12b68c5aa524a3e4a32eaf8c48fe5a574aa847b2809a2fa2ee9c1",
"0x1e28688e1190ccc0f434a3aca51372876e808cfe4dbcd4e231a32981e96a460b",
"0x54ad0f4b54dbb8cb15a86769dbce76255203bb425637178f5d208668f26a4014"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

