import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

require('dotenv').config();


const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3('https://eth-rinkeby.alchemyapi.io/v2/FY0T2dV3V8QfMTodd7Lmmt2eBeXMcwEx') 

const contract = require("../contract-abi.json"); 
const contractAddress =  "0xcAD86c8Cb1922BFFD0A34744f7693E6F90abC07E";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (addressArray.length > 0) {
          return {
            address: addressArray[0],
            status: "",
          };
        } else {
          return {
            address: "",
            status: "Connect MetaMask",
          };
        }
      } catch (err) {
        return {
          address: "",
          status: "😥 " + err.message,
        };
      }
    } else {
      return {
        address: "",
        status: (
        <a target="_blank" rel="noreferrer" href={`https://metamask.io/download.html`}>Connect MetaMask</a>
        ),
      };
    }
};

export const connectWallet = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            const obj = {
                status: "",
                address: addressArray[0],
            };
            return obj;
        } catch (err) {
            return {
                address: "",
                satus: "sad " + err.message,
            };
        }
    }else {
        return {
            address: "",
            status: (
              <a href="https://metamask.io/" target="_blank" rel="noreferrer" className="text-white">Install MetaMask</a>
            ),
        };
    }
};

export const payForPack = async() => {

  const transactionParameters = {
    nonce: '0x00', // ignored by MetaMask,
    to: '0xEAaDF20196576A500E502b490ad7A2c5e51ED6C7', // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    value: web3.utils.numberToHex(web3.utils.toWei('.05', 'ether')), // Only required to send ether to the recipient from the initiating external account.
   chainId: '0x3',
  };

  try {
      const txHash = await window.ethereum
          .request({
              method: 'eth_sendTransaction',
              params: [transactionParameters],
          });
      return {
          success: true,
          buyerAddress: window.ethereum.selectedAddress,
          txHash: txHash
      }
  } catch (error) {
      return {
          success: false,
      }
  }
};

export const exchangeEth = (props) => {
  return String(parseInt(props)/2000);
}

export const payDuel = async(props) => {
  var amount = exchangeEth(props);

  const transactionParameters = {
    nonce: '0x00', // ignored by MetaMask
    gas: web3.utils.numberToHex('25000'), // customizable by user during MetaMask confirmation.
    to: '0xEAaDF20196576A500E502b490ad7A2c5e51ED6C7', // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    value: web3.utils.numberToHex(web3.utils.toWei(amount, 'ether')), // Only required to send ether to the recipient from the initiating external account.
    data:
        '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
   chainId: '0x3',
  };

  try {
      await window.ethereum
          .request({
              method: 'eth_sendTransaction',
              params: [transactionParameters],
          });
      return {
          success: true,
      }
  } catch (error) {
      return {
          success: false,
      }
  }
};

export const mintNFT = async(props) => {
    const count = props;
    const gas = parseInt(count)*50000;
    const cost = parseInt(count)*.0008;
    const transactionParameters = {
      'from': window.ethereum.selectedAddress,
      'to': contractAddress,
      'nonce': '0x00',
      'gas': String(gas),
      'value': web3.utils.numberToHex(web3.utils.toWei(String(cost), 'ether')),
      'data': nftContract.methods.mint(parseInt(count)).encodeABI()
    };
    try {
      await window.ethereum
          .request({
              method: 'eth_sendTransaction',
              params: [transactionParameters],
          });
      return {
          success: true,
      }
    } catch (error) {
        return {
            success: false,
        }
    }

  }
  export const mintGod = async(props) => {
    const transactionParameters = {
      'from': window.ethereum.selectedAddress,
      'to': contractAddress,
      'nonce': '0x00',
      'gas': '50000',
      'data': nftContract.methods.mintGod(props).encodeABI()
    };
    try {
      await window.ethereum
          .request({
              method: 'eth_sendTransaction',
              params: [transactionParameters],
          });
      return {
          success: true,
      }
    } catch (error) {
        return {
            success: false,
        }
    }

  }
  
  export const mintAvatar= async() => {
    const transactionParameters = {
      'from': window.ethereum.selectedAddress,
      'to': contractAddress,
      'nonce': '0x00',
      'gas': '50000',
      'data': nftContract.methods.mintAvatar().encodeABI()
    };
    try {
      await window.ethereum
          .request({
              method: 'eth_sendTransaction',
              params: [transactionParameters],
          });
      return {
          success: true,
      }
    } catch (error) {
        return {
            success: false,
        }
    }

  }
  export const withdraw = async() => {
    const transactionParameters = {
      'from': window.ethereum.selectedAddress,
      'to': contractAddress,
      'nonce': '0x00',
      'gas': '50000',
      'data': nftContract.methods.withdrawAll().encodeABI()
    };
    try {
      await window.ethereum
          .request({
              method: 'eth_sendTransaction',
              params: [transactionParameters],
          });
      return {
          success: true,
      }
    } catch (error) {
        return {
            success: false,
        }
    }

  }