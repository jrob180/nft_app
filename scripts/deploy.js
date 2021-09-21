async function main() {
    const Elemental = await ethers.getContractFactory("Elemental");
 
    // Start deployment, returning a promise that resolves to a contract object
    const elemental = await Elemental.deploy();   
    console.log("Contract deployed to address:", elemental.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });