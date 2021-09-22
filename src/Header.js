import { useEffect, useState } from "react";
import { connectWallet, getCurrentWalletConnected } from "./utils/interact.js";
import { Link } from "react-router-dom";

export default function Header(props) {

  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => { 
    async function asyncFunction() {
      const {address, status} = await getCurrentWalletConnected();
      setWallet(address);
      setStatus(status);
      addWalletListener();
    }
    asyncFunction();
  }, []);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("Connect MetaMask");
        } else {
          setWallet("");
          setStatus("Connect MetaMask");
        }
      });
    } else {
      setStatus(
        <a href="https://metamask.io/" target="_blank" rel="noreferrer" className="text-white">Install MetaMask</a>
      );
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
      if(walletResponse['address']!==""){
        setStatus(walletResponse.status);
        setWallet(walletResponse.address);
      }
  };

  return (
    <header className="bg-gray-dark shadow-lg sticky top-0 z-50 font-Bai">
      <nav className="max-w-7xl 3xl:max-w-9xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-3 3xl:py-4 flex items-center justify-between border-b border-gold-light lg:border-none">
          <div className="flex items-center">
            <Link to="/" className="3xl:text-xl font-medium text-white hover:text-white">
              ELEMENTALS.<span className="3xl:text-xl font-medium text-gold-light">GAME</span>
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
                <Link to="guide" className="3xl:text-xl font-normal text-white hover:text-gold-light cursor-pointer">
                  How to Play
                </Link>
                <Link to="faq" className="3xl:text-xl font-normal text-white hover:text-gold-light cursor-pointer">
                  FAQ
                </Link>
                <Link to="mint" className="3xl:text-xl font-normal text-white hover:text-gold-light cursor-pointer">
                  Mint
                </Link>
                <a href="PLACEHOLDERCONTRACTURLPLSSET" className="3xl:text-xl font-normal text-white hover:text-gold-light cursor-pointer">
                  Contract
                </a>
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <button
              className="shadow-lg inline-flex items-center border-gold-light hover:border-gold-dark p-2 rounded border-2 border-transparent text-xs sm:text-base font-medium text-white"
              onClick={connectWalletPressed}
            >
            <div className={`font-bold ml-1 mr-2 h-2 w-2 rounded-full ${walletAddress ? "bg-gold-light animate-pulse" : "bg-white animate-pulse"} `}></div>
            {walletAddress.length > 0 ? (
              "Metamask: " +
              String(walletAddress).substring(0,6) +
              "..." +
              String(walletAddress).substring(38)
              ) : (
              <span className="mr-1"> {status}</span>
            )}
          </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-6 lg:hidden py-2 md:py-3 lg:py-0">
        <span className="3xl:text-xl font-normal text-white hover:text-gold-light cursor-pointer">
                  How to Play
                </span>
                <span className="3xl:text-xl font-normal text-white hover:text-gold-light cursor-pointer">
                  Mint
                </span>
                <span className="3xl:text-xl font-normal text-white hover:text-gold-light cursor-pointer">
                  Contract
                </span>
        </div>
      </nav>
    </header>
  )
}