// step-1: add event listener/ click handler to the  withdraw btn
document.getElementById('btn-withdraw').addEventListener('click', function () {

    // step-2: get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    
// for input field use .value to the inside the input field
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-7: clear the withdraw field
    withdrawField.value = '';

if(isNaN(newWithdrawAmount)){
    alert('Please provide a valid number')
    return;
}

 // step-3 : get the current withdraw total
// for non-input(element other than input, textarea) use .innerText to get  the text
const withdrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawTotalString = withdrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


// step-5: get balance current total
const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// warning
if(newWithdrawAmount > previousBalanceTotal){
    alert('Bap Er Bank e eto tk nai');
    return;
}

// step-4: add numbers to set the total withdraw
const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // set the withdraw total
withdrawTotalElement.innerText = currentWithdrawTotal;

// step-6: calculate new total balance
const currentBalanceTotal = previousBalanceTotal - currentWithdrawTotal;
// set the balace total
balanceTotalElement.innerText = currentBalanceTotal;
})