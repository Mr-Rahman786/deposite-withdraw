document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newwithdrawString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newwithdrawString);
    // console.log(newWithdrawAmount);
    withdrawField.value = '';
// ==========
    const withDrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withDrawTotalElement.innerText;
    const withdrawAmount = parseFloat(previousWithdrawTotalString);
// =============
    
    // calculate total amount
    const totalWithdrawAmount = withdrawAmount + newWithdrawAmount;
    withDrawTotalElement.innerText = totalWithdrawAmount;
// ==========
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceElement = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceElement);

// ==========
    const newBalnceTotaAmount = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalnceTotaAmount;
})