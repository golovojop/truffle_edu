var Rewarder = artifacts.require('./Rewarder.sol');

<<<<<<< HEAD
contract('Rewarder', function(accounts) {
  it('should assert true', function(done) {
    var rewarder = Rewarder.deployed();
    assert.isTrue(true);
    done();
  });

  it('Should have 1000 tokens after deployment', function() {
    return Rewarder.deployed().then(function(instance) {
      return instance.getBalance.call();
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 1000, 'No 1000 tokens in the first account');
    });
  });

  it('Ex: Should have 1000 tokens after deployment', function() {
    return Rewarder.deployed().then(function(instance) {
      return instance.getBalanceEx.call(accounts[0]);
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 1000, 'No 1000 tokens in the first account');
    });
  });
});
=======
/**
 * Deploy contract.
 * Check emission value.
 */


contract('Rewarder', function(accounts) {

  it('Should be deployed successfuly', function(){
    return Rewarder.deployed().then(function(instance){
      assert.isTrue(instance != 0);
    })
  })

  /*
  it('Should have an init emission of 1000 tokens', function(){
    return Rewarder.deployed().then(function(instance){
      return instance.getBalance.call(accounts[0])
    }).then(function(balance){
      assert.equal(1000, balance.valueOf(), 'Bad emission');
    })
  })
  */

  /*
  it('Should fire event on reward', function() {
    return Rewarder.deployed().then(async (instance) => {
      const rewardWatcher = instance.Reward();
      await instance.reward(100, accounts[1], {from: accounts[0]});
      const events = rewardWatcher.get();
      assert.equal(1, events.length);
      assert.equal(accounts[1], events[0].args._to);
    })
  })
  */
})

contract('Rewarder', function(accounts){

  var acc0_before, acc0_after;
  var acc1_before, acc1_after;
  var rwrd;

  it('Should be deployed successfuly', function(){
    return Rewarder.deployed().then(function(instance){
      assert.isTrue(instance != 0);
    })
  })

  it('Init balances should be correct', function(){
    return Rewarder.deployed().then(function(instance){
      rwrd = instance;
      return rwrd.getBalance.call(accounts[0])
    }).then(function(balance){
      acc0_before = balance.toNumber();
      return rwrd.getBalance.call(accounts[1])
    }).then(function(balance){
      acc1_before = balance.toNumber();

      assert.isTrue(acc0_before == 1000, "bad emission value");
      assert.isTrue(acc1_before == 0, "incorrect balance account[1]");
    })
  })

  it('Should fire event on reward', function() {
    return Rewarder.deployed().then(async (instance) => {
      const rewardWatcher = instance.Reward();
      await instance.reward(100, accounts[1], {from: accounts[0]});
      const events = rewardWatcher.get();
      assert.equal(1, events.length);
      assert.equal(accounts[1], events[0].args._to);
    })
  })

  it('Final balances should be correct', function(){
    return Rewarder.deployed().then(function(instance){
      rwrd = instance;
      return rwrd.getBalance.call(accounts[0])
    }).then(function(balance){
      acc0_after = balance.toNumber();
      console.log("acc0_b = " + acc0_before);      
      console.log("acc0_a = " + acc0_after);
      return rwrd.getBalance.call(accounts[1])
    }).then(function(balance){
      acc1_after = balance.toNumber();
      assert.equal(acc0_after, acc0_before - 100, "incorrect balance account[0]");
      assert.equal(acc1_after, acc1_before + 100, "incorrect balance account[1]");
    })
  })
})

>>>>>>> init commit
