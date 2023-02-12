document.getElementById('btn-deposite').addEventListener('click', function () {
    const depositeField = document.getElementById('deposite-field')
    const newDepositeAmountString = depositeField.value;
    const newdepositeAmount = parseFloat(newDepositeAmountString)
// deposite Section

    const depositeTotalElement = document.getElementById('deposite-total');
    const previousDepositeTotalString = depositeTotalElement.innerText;
    
    const previousDepositeAmount = parseFloat(previousDepositeTotalString)
    console.log(previousDepositeAmount)
    const currentDepositeTotal = previousDepositeAmount + newdepositeAmount;
    depositeTotalElement.innerText = currentDepositeTotal;


    

// balance sdection

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = newdepositeAmount + previousBalanceTotal;
    balanceTotalElement.innerText = currentBalanceTotal;



    
    depositeField.value="";
})

    // Withdraw section

document.getElementById('btn-withdraw').addEventListener('click', function() {
    const withdrawField = document.getElementById('withdraw-amount');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previouswithdrawTotalAmountString = withdrawTotalElement.innerText;
    const previousWithdrawTotalAmount = parseFloat(previouswithdrawTotalAmountString);
    
    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotalAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal


    // balance


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;



    withdrawField.value = "";

})

