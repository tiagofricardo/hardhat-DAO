const { CRYPTODEVSNFT_CONTRACT_ADDRESS } = require("../helper-hardhat-config")
const { ethers } = require("hardhat")

module.exports = async function ({ getNamedAccounts, deployments }) {
    let nftMarketplaceContract, nftMarketplaceContractAddress
    nftMarketplaceContract = await ethers.getContract("FakeNFTMarketplace")
    nftMarketplaceContractAddress = nftMarketplaceContract.address

    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const args = [nftMarketplaceContractAddress, CRYPTODEVSNFT_CONTRACT_ADDRESS]

    await deploy("CryptoDevsDAO", {
        from: deployer,
        value: ethers.utils.parseEther("0.01"),
        log: true,
        args: args,
    })
    log("Exchange Deployed!")
    log("-----------------------------------------------")
}

module.exports.tags = ["all", "DAO"]
