//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Elemental is ERC721Enumerable, Ownable {

  using SafeMath for uint256;

  uint16[] elementals;
  bool public mintActive = true;
  bool public godOfWater = false;
  bool public godOfFire = false; 
  bool public godOfEarth = false;
  bool public godOfAir = false;
  bool public avatar = false;
  bool public gameWon = false;
 
  address public gameWinner;

  mapping(address => uint) public claimedPerWallet;
  uint256 public constant price = 0.0008 ether;

  address public constant dev1Wallet = 0x09B0574EEE786d945a7B33C675B943f1f8b4aD64;
  address public constant dev2Wallet = 0x09B0574EEE786d945a7B33C675B943f1f8b4aD64;
  address public constant dev3Wallet = 0x09B0574EEE786d945a7B33C675B943f1f8b4aD64;
  address public constant prizeWallet = 0x09B0574EEE786d945a7B33C675B943f1f8b4aD64;

  string public baseTokenURI;

  constructor()
  ERC721("Elemental", "ELEM") {

    setBaseURI('https://RegularAnguishedFonts.riftsmurfssuppo.repl.co/api/elemental/');

    
    for(uint16 i = 1; i <= 6000; i++) {
      if (i != 0 && i != 1 && i != 1501 && i != 3001 && i != 4501) {
        elementals.push(i);
      }
    }

    _safeMint(dev1Wallet, 500);
    _safeMint(dev1Wallet, 1000);
    _safeMint(dev1Wallet, 1300);
    _safeMint(dev1Wallet, 1450);
    _safeMint(dev1Wallet, 1499);
    _safeMint(dev1Wallet, 2000);
    _safeMint(dev1Wallet, 2500);
    _safeMint(dev1Wallet, 2800);
    _safeMint(dev1Wallet, 2950);
    _safeMint(dev1Wallet, 2999);
    _safeMint(dev1Wallet, 3500);
    _safeMint(dev1Wallet, 4000);
    _safeMint(dev1Wallet, 4300);
    _safeMint(dev1Wallet, 4450);
    _safeMint(dev1Wallet, 4499);
    _safeMint(dev1Wallet, 5000);
    _safeMint(dev1Wallet, 5500);
    _safeMint(dev1Wallet, 5800);
    _safeMint(dev1Wallet, 5950);
    _safeMint(dev1Wallet, 5999);
  }

  function mint(uint numberOfTokens) public payable {
    require(mintActive == true, "mint not active");
    require(tx.origin == msg.sender, "nahhh");
    require(numberOfTokens > 0, "don't be poor");
    require(numberOfTokens <= 100, "holy fuck");
    require(numberOfTokens <= elementals.length, "we out baby");
    require(claimedPerWallet[msg.sender] + numberOfTokens <= 64, "sorry no more for you");
    require(msg.value >= price.mul(numberOfTokens), "get more eth bruh");

    for (uint i = 0; i < numberOfTokens; i++) {
      uint256 mintingData = getRandom(elementals);
      _safeMint(msg.sender, mintingData);
      claimedPerWallet[msg.sender] += 1;
    }

    uint devCut = msg.value * 15 / 100;
    payable(dev1Wallet).transfer(devCut);
    payable(dev2Wallet).transfer(devCut);
    payable(dev3Wallet).transfer(devCut);
  }

  function getRandom(uint16[] storage _arr) private returns (uint256) {
    uint256 random = _getRandomNumber(_arr);
    uint256 tokenId = uint256(_arr[random]);

    _arr[random] = _arr[_arr.length - 1];
    _arr.pop();

    return tokenId;
  }

	/**
   * @dev Pseudo-random number generator
	 * if you're able to exploit this you probably deserve to win TBH
   */
  function _getRandomNumber(uint16[] storage _arr) private view returns (uint256) {
    uint256 random = uint256(
      keccak256(
        abi.encodePacked(
          _arr.length,
          blockhash(block.number - 1),
          block.coinbase,
          block.difficulty,
          msg.sender
        )
      )
    );

    return random % _arr.length;
  }

  function tokensByOwner(address _owner) external view returns(uint16[] memory) {
    uint256 tokenCount = balanceOf(_owner);
    if (tokenCount == 0) {
      return new uint16[](0);
    } else {
      uint16[] memory result = new uint16[](tokenCount);
      uint16 index;
      for (index = 0; index < tokenCount; index++) {
        result[index] = uint16(tokenOfOwnerByIndex(_owner, index));
      }
      return result;
    }
  }

  function mintGod(uint stagger) public {
    if(stagger == 0){
        require(godOfWater == false, "The God Of Water has already been claimed");
    } else if(stagger == 1500){
        require(godOfFire == false, "The God Of Fire has already been claimed");
    } else if(stagger == 3000){
        require(godOfEarth == false, "The God Of Water has already been claimed");
    } else if (stagger == 4500){
        require(godOfAir == false, "The God Of Air has already been claimed");
    }

    uint16[] memory tokensOwned = this.tokensByOwner(msg.sender);
    uint16[] memory points = new uint16[](7);

    for (uint16 k = 0; k < tokensOwned.length; k++) {
        uint16 token = tokensOwned[k];
        if(token <= stagger){
            //wrong element
        }
        else if (token <= stagger + 751) {
          points[0] = 1;
        } else if (token <= stagger + 1201) {
          points[1] = 1;
        } else if (token <= stagger + 1426) {
          points[2] = 1;
        } else if (token <= stagger + 1496) {
          points[3] = 1;
        } else if (token <= stagger + 1500) {
          points[4] = 1;
        }
    }

    uint16 totalPoints;
    for (uint16 j = 0; j < points.length; j++) {
      if (points[j] == 1) {
        totalPoints += 1;
      }
    }

    require(totalPoints >= 5, "You do not have the required Elementals to mint a God");

    if(stagger == 0){
        _safeMint(msg.sender, 1);
        godOfWater = true;
    } else if(stagger == 1500){
        _safeMint(msg.sender, 1501);
        godOfFire = true;
    } else if(stagger == 3000){
        _safeMint(msg.sender, 3001);
        godOfEarth = true;
    } else if (stagger == 4500){
        _safeMint(msg.sender, 4501);
        godOfAir = true;
    }
  }

  function mintAvatar() public {
    require(avatar == false, "The Avatar has already been claimed");
    uint256 godOfWaterId = 1;
    uint256 godOfFireId = 1501;
    uint256 godOfEarthId = 3001;
    uint256 godOfAirId = 4501;

    uint16[] memory tokensOwned = this.tokensByOwner(msg.sender);
    uint16[] memory points = new uint16[](7);

    for (uint16 k = 0; k < tokensOwned.length; k++) {
        uint16 token = tokensOwned[k];
        if (godOfWaterId == token) {
          points[0] = 1;
        } else if (godOfFireId == token) {
          points[1] = 1;
        } else if (godOfEarthId == token) {
          points[2] = 1;
        } else if (godOfAirId == token) {
          points[3] = 1;
        }
    }

    uint16 totalPoints;
    for (uint16 j = 0; j < points.length; j++) {
      if (points[j] == 1) {
        totalPoints += 1;
      }
    }
    
    require(totalPoints >= 4, "You do not have the required elementals to mint the Avatar.");
    _safeMint(msg.sender, 0);
    avatar = true;
  }

  function winTheGame() public {
    require(gameWon == false, "The game is already over");
    require(this.ownerOf(0) == msg.sender, "You have not acquired the Avatar");
    payable(msg.sender).transfer(address(this).balance);
    gameWon = true;
    gameWinner = msg.sender;
  }

  //admin
  function _baseURI() internal view virtual override returns (string memory) {
    return baseTokenURI;
  }

  function setBaseURI(string memory baseURI) public onlyOwner {
    baseTokenURI = baseURI;
  }

  function setMintActive(bool _mintActive) public onlyOwner {
    mintActive = _mintActive;
  }

  function withdraw() public onlyOwner {
    uint256 balance = address(this).balance;
    payable(msg.sender).transfer(balance);

    if (gameWon == false) {
      gameWon = true;
      gameWinner = msg.sender;
    }
  }
}