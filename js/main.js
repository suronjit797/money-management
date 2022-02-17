
// global variable 
let totalBalance = 0
let income = 0


// function for reuse
function selectorId(id) {
    return document.getElementById(id)
}

// text to number value
function inputValue() {
    for (const id of arguments) {
        let incomeTextValue = selectorId(id)
        return parseFloat(incomeTextValue.value)
    }

}

// clear input field
function clearInputValue() {
    let clearValue
    for (const id of arguments) {
        let incomeTextValue = selectorId(id)
        clearValue = incomeTextValue.value = ''
    }
    return clearValue
}

// function for error message
function errorMessage(message) {
    selectorId('modal_message').innerText = message
    selectorId('modal_close').classList.add('active')
    document.body.style.overflowY = 'hidden'
}

// calculate button click
selectorId('calculate').addEventListener('click', function () {
    // income
    income = inputValue('income')
    // expenses
    let food = inputValue('food')
    let rent = inputValue('rent')
    let clothes = inputValue('clothes')
    let totalExpanse = food + rent + clothes
    let balance = 0

    // error handling of income and expanse
    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)) {
        errorMessage('Please fill all input boxes with number')
    }
    // error no negative number
    else if (income < 0 || food < 0 || rent < 0 || clothes < 0) {
        errorMessage('Please fill all positive number only')
    }
    // error no more money
    else if (income < totalExpanse) {
        errorMessage('Your expanses is more than your income')
    }

    else {
        selectorId('totalExpense').innerText = totalExpanse
        balance = income - totalExpanse
        selectorId('balanceAmount').innerText = balance
    }
    totalBalance = balance
    clearInputValue('income', 'food', 'rent', 'clothes')
})

//saving section 
selectorId('save_btn').addEventListener('click', function () {
    let percentageTextValue = selectorId('percentage')
    let percentage = parseFloat(percentageTextValue.value)
    let previousBalance = totalBalance
    let savingAmount = 0
    if (previousBalance <= 0) {
        errorMessage('You have not any balance')
    } else if (!percentage || isNaN(percentage)) {
        errorMessage('Please provide a valid percentage value')
    } else if (percentage > 100) {
        errorMessage('You cannot save more than you have')
    } else if (percentage < 0) {
        errorMessage('percentage must be positive')
    }
    else {
        savingAmount = ((income * percentage) / 100).toFixed(2)
        if (savingAmount > previousBalance) {
            errorMessage('you have not enough money')
            console.log(savingAmount)
        } else {
            selectorId('savingAmount').innerText = savingAmount
            selectorId('remainingBalance').innerText = ((previousBalance - savingAmount).toFixed(2))
        }
    }
    clearInputValue('percentage')
})


// modal
selectorId('modal_close').addEventListener('click', function () {
    selectorId('modal_close').classList.remove('active')
    document.body.style.overflowY = 'scroll'
})


