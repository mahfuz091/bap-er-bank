document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-amount');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    console.log(newWithdrawAmount)
    // withdrawField.value = newWithdrawAmount;



    const withdrawTotalAmount = document.getElementById('withdraw-total');
    const previousWithdrawTotalAmountString = withdrawTotalAmount.innerText;
    const previousWithdrawTotalAmount = parseFloat(previousWithdrawTotalAmountString);
    console.log(previousWithdrawTotalAmount)
    // withdrawTotalAmount.innerText = previousWithdrawTotalAmount
    const currentWithdrawTotalAmount = previousWithdrawTotalAmount + newWithdrawAmount;
    withdrawTotalAmount.innerText = currentWithdrawTotalAmount;



    withdrawField.value = ""





})