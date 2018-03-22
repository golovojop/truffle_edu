var Rewarder = artifacts.require("./Rewarder.sol");

module.exports = function(deployer) {
<<<<<<< HEAD
  deployer.deploy(Rewarder);
=======
  deployer.deploy(Rewarder, 1000);
>>>>>>> init commit
};
