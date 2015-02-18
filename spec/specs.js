describe('BankAccount', function() {
  it("creates a bank account", function(){
    var testAccount= Object.create(BankAccount);
    expect(testAccount == null).to.equal(false);
  });

  it("has a name and intial balance", function() {
    var testAccount= Object.create(BankAccount);
    expect(testAccount.name).to.equal("");
    expect(testAccount.balance).to.equal(0);
  });

});

describe('Withdraw', function(){
  it("reduces balances by a specified amount", function(){
    var testAccount = Object.create(BankAccount);
    testAccount.balance = 100.00;
    testAccount.withdraw(25.00);
    expect(testAccount.balance).to.equal(75.00);

  });
  it("prompts a warning message if balance will be below 0", function() {
    var testAccount = Object.create(BankAccount);
    testAccount.balance = 100.00;
    testAccount.withdraw(125.00);
    expect(testAccount.balance).to.equal(-50.00);
  });
});

describe('Deposit', function(){
  it("adds to balance by a specified amount", function(){
    var testAccount = Object.create(BankAccount);
    testAccount.balance = 100.00;
    testAccount.deposit(25.00);
    expect(testAccount.balance).to.equal*(125.00);
  })

});

describe('validateAmount', function() {
  it("will not accept more than 2 decimal places (X.XX)", function() {
    expect(validateAmount(1.001)).to.equal(false);
  })
  it("will not accept a negative input", function() {
    expect(validateAmount(-25.00)).to.equal(false);
  });
});
