module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    await deploy("FakeNFTMarketplace", {
        from: deployer,
        log: true,
        args: [],
    })
    log("Fake NFT Marketplace Deployed!")
    log("-----------------------------------------------")
}

module.exports.tags = ["all", "FakeNFTMarketplace"]
