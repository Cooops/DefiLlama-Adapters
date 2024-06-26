const ADDRESSES = require('../helper/coreAssets.json')
const { nullAddress, treasuryExports } = require("../helper/treasury");

const treasury = "0x0BC3807Ec262cB779b38D65b38158acC3bfedE10";
const treasury1 = "0xb1a32FC9F9D8b2cf86C068Cae13108809547ef71"

module.exports = treasuryExports({
  ethereum: {
    tokens: [ 
        nullAddress,
        ADDRESSES.ethereum.USDC, //USDC
        ADDRESSES.ethereum.STETH,//stETH
        ADDRESSES.ethereum.RETH,
        "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0" //wstETH
     ],
    owners: [treasury, treasury1],
  },
})