const Tamacoinchi = artifacts.require("./Tamacoinchi.sol");
const PetCreator = artifacts.require("./PetCreator.sol");

let petCreator;
let petAddress;
let pet;

before(async () => {
  petCreator = await PetCreator.new();

  let ownerName = "Enis";
  let name = "Staaaahl";
  let isMale = true;
  let lastTimeFed = new Date().getTime();

  let ownerName2 = "Albert";
  let name2 = "Hana";
  let isMale2 = false;
  let lastTimeFed2 = new Date().getTime() - 25 * 3600 * 1000;

  await petCreator.createPet(ownerName, name, isMale, lastTimeFed);
  await petCreator.createPet(ownerName2, name2, isMale2, lastTimeFed2);

  petAddress = await petCreator.getDeployedPets.call();

  pet = await Tamacoinchi.at(petAddress[0]);
  pet2 = await Tamacoinchi.at(petAddress[1]);
});

async function checkCreatorBalance(account) {
  const creatorAccountBalance = await web3.eth.getBalance(
    account,
    function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log("Balance before: " + result);
      }
    }
  );
  return creatorAccountBalance;
}

contract("Tamacoinchi Test", (accounts) => {
  it("Pet has an address", async () => {
    assert.ok(petAddress[0]);
  });

  it("Pet has an Owner", async () => {
    owner = await pet.owner.call();
    assert.ok(owner);
  });

  it("Owner has a name", async () => {
    var name = await pet.ownerName.call();
    assert.equal(name, "Enis");
  });

  it("Pet has a name", async () => {
    var name = await pet.name.call();
    assert.equal(name, "Staaaahl");
  });

  it("Pet has a gender", async () => {
    var gender = await pet.isMale.call();
    assert.equal(gender, true);
  });

  it("Pet has a lastTimeFed", async () => {
    var lastTimeFed = await pet.isMale.call();
    assert.ok(lastTimeFed > 0);
  });

  it("Owner can feed pet", async () => {
    const currentLastTimeFed = await pet.lastTimeFed.call();
    const amount = "10000000000000000";
    await pet.feed(new Date().getTime(), { from: accounts[0], value: amount });
    const newLastTimeFed = await pet.lastTimeFed.call();

    console.log(currentLastTimeFed.toString(), newLastTimeFed.toString());

    // 2*3600*1000 equals 2 hours - 0.01eth will increase life by 2hour
    assert.equal(
      newLastTimeFed.toString() - currentLastTimeFed.toString(),
      2 * 3600 * 1000
    );
  });

  it("Owner doesn't pay enough", async () => {
    const currentLastTimeFed = await pet.lastTimeFed.call();
    const amount = "5000000000000000";

    try {
      await pet.feed(new Date().getTime(), {
        from: accounts[0],
        value: amount,
      });
      const newLastTimeFed = await pet.lastTimeFed.call();
      console.log(currentLastTimeFed.toString(), newLastTimeFed.toString());
      assert.equal(newLastTimeFed.toString(), 0);
    } catch (error) {
      assert(error);
    }
  });

  it("Other people can't feed my pet", async () => {
    const amount = "10000000000000000";

    try {
      await pet.feed(new Date().getTime(), {
        from: accounts[2],
        value: amount,
      });
      assert(false);
    } catch (error) {
      console.log("error");
      assert(error);
    }
  });

  it("Pet is dead and needs to be revived", async () => {
    const currentLastTimeFed = await pet2.lastTimeFed.call();
    const testTime = new Date().getTime() + 24 * 3600 * 1000;

    assert.ok(currentLastTimeFed.toString() < testTime.toString());
  });

  it("Non-owner can revive pet and pays 0.2ETH to do so", async () => {
    const currentLastTimeFed = await pet2.lastTimeFed.call();
    const amount = "200000000000000000";

    try {
      await pet2.revive(new Date().getTime(), {
        from: accounts[1],
        value: amount,
      });
    } catch (error) {
      console.log(error);
    }

    const newLastTimeFed = await pet2.lastTimeFed.call();

    assert.ok(newLastTimeFed > currentLastTimeFed);
  });

  it("Non-owner wants to revive pet but doesn't pay 0.2ETH to do so", async () => {
    const amount = "100000000000";

    try {
      await pet2.revive(new Date().getTime(), {
        from: accounts[1],
        value: amount,
      });
      assert(false);
    } catch (error) {
      assert(error);
    }
  });

  it("Owner cannot revive pet", async () => {
    const amount = "2000000000000000000";

    try {
      await pet2.revive(new Date().getTime(), {
        from: accounts[1],
        value: amount,
      });
      assert(false);
    } catch (error) {
      assert(error);
    }
  });

  it("Creator gets payed after feeding pet", async () => {
    const creatorAccountBalanceBeforeTransfer = await checkCreatorBalance(
      accounts[9]
    );

    const amount = "20000000000000000";
    await pet.feed(new Date().getTime(), { from: accounts[0], value: amount });

    const creatorAccountBalanceAfterTransfer = await checkCreatorBalance(
      accounts[9]
    );

    assert.ok(
      parseInt(creatorAccountBalanceBeforeTransfer) <
        parseInt(creatorAccountBalanceAfterTransfer)
    );
  });
});
