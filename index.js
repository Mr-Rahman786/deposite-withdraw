document.getElementById('btn-deposite').addEventListener('click', function () { 
    const depositeFeild = document.getElementById('deposite-field');
    const newDepositeString = depositeFeild.value;
    const newDepositeAmount = parseFloat (newDepositeString);
    // console.log(newDepositeAmount);
    depositeFeild.value = '';
    const depositeTotalElement = document.getElementById('deposite-total');
    const previouDepositeTotalString = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previouDepositeTotalString);

    const newDepositeTotal = previousDepositeTotal + newDepositeAmount;
    depositeTotalElement.innerText = newDepositeTotal;

    // last
    const previousTotalElement = document.getElementById('balance-total');
    const previousTotalString = previousTotalElement.innerText;
    // console.log(previousTotalString);
    const previousTotalAmount = parseFloat(previousTotalString);

    const totalDepositeAmount = previousTotalAmount + newDepositeAmount;
    // console.log(totalDepositeAmount);
    previousTotalElement.innerText = totalDepositeAmount;
})