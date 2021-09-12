require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remind method hover kite brave slim'; 
let testAccounts = [
"0x97e84195faa0b9b6450f569587a65c50f995c7b98c36818ab8322b73a481e3a0",
"0xc8eb77c98d1f8405668e0aab7a752410a2ff23812cff09ee6f71adbf58a4066e",
"0x17f81cb9870184cfa0abcbde4e3b0140632a8d97ef057b200dde584c08d7c3e7",
"0x4b75acef525225800e2a506a030ed10e178f993be7c59a40d1c2221896921d5a",
"0x5dd3237b44b16bf657ef3747fbc06f7e8eda4db12292c2c84c740bd933010107",
"0x964b19c9064ccf8ba83a7b78a39339ee60b9b93e0fcac11f2e939de84b98a6b1",
"0xd073610421396abb21437b4073d8e7c2497a815337762cb5a8c15674e9077867",
"0x0e212b1217ac5fbba89b440ac84923e22698bdc44f1d674bb4560da830e24719",
"0xbc325df54bcc908a92c6941407707be7bc45eb922dc4e80068bfad54a474fbe5",
"0x4b90a3744a7d97789784c1a22f0f22c6472db21dde1ec9f9b5e9bc44d30e3b8e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


