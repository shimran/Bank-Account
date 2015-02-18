var BankAccount = {
  name: "",
  balance: 0,
  withdraw: function(amount){
    var newBalance = this.balance - amount;
    if(validateAmount(amount))
    {


      if(newBalance<0){
        if (confirm("WARNING: Your balance will be in the negative and charged a $25 overdraft fee!"))
        {
          newBalance = newBalance - 25;
        } else {
          return false;
        }

      }
      this.balance = newBalance;
      return newBalance;
  }
  },
  deposit: function(amount){
    var newBalance = this.balance + amount;
    if(validateAmount(amount)){
    if(amount<0){
      return false;
    }
    this.balance = newBalance;
    return newBalance;
  }
}
};

var validateAmount = function(amount) {
  if(amount<=0){
    return false;
  }

 return true;
};



var account = Object.create(BankAccount);

$(document).ready(function(){
  $('form#accountCreateForm').submit(function(event){
    event.preventDefault()

    var name= $('input#name').val();
    var balance = parseFloat($('input#initialDeposit').val());

    account.name = name;
    account.balance = balance;

    $('#accountBalance').text(account.balance);
  });

  $('form#accountTransactionForm').submit(function(event){
    event.preventDefault()
    $('#accountBalance').click("");

    var deposit = parseFloat($('input#deposit').val());
    var withdrawal = parseFloat($('input#withdraw').val());

    if (isNaN(deposit)){
      deposit=0.00;
    }
    if (isNaN(withdrawal)) {
       withdrawal=0.00;
     }
    account.deposit(parseFloat(deposit));
    account.withdraw(parseFloat(withdrawal));


    $('#accountBalance').text(account.balance.toFixed(2));
  });

});
