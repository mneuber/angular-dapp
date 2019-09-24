var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var CollectibleFactory = artifacts.require("./CollectibleFactory.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.deploy(CollectibleFactory);
};
