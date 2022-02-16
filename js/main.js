// my personal function for id selector
function selectorId(id) {
    return document.getElementById(id)
}

function inputValue(id) {
    let incomeTextValue = selectorId(id)
    return parseFloat(incomeTextValue.value)
}


// income expanse function 
function inputOutputBalance() {
    // income
    let income = inputValue('income')

    // expenses
    let food = inputValue('food')
    let rent = inputValue('rent')
    let clothes = inputValue('clothes')
    let totalExpanse = food + rent + clothes
    let balance = 0
    // error handling of income and expanse
    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)) {
        selectorId('modal_message').innerText = 'Please fill all input boxes with number'
        selectorId('modal_close').style.display = 'block'
    } else if (income < 0 || food < 0 || rent < 0 || clothes < 0) {
        selectorId('modal_message').innerText = 'Please fill all number positive'
        selectorId('modal_close').style.display = 'block'
    }
    else if (income < totalExpanse) {
        selectorId('modal_message').innerText = 'Your expanse is mode than your income'
        selectorId('modal_close').style.display = 'block'
    } else {
        selectorId('totalExpense').innerText = totalExpanse
        balance = income - totalExpanse
        selectorId('balanceAmount').innerText = balance
    }
    return balance
}

// calculate button click
selectorId('calculate').addEventListener('click', inputOutputBalance)
selectorId('save_btn').addEventListener('click', function () {
    let percentageTextValue = selectorId('percentage')
    let percentage = parseFloat(percentageTextValue.value)
    let previousBalance = inputOutputBalance()

    let savingAmount = 0


    if (previousBalance <= 0) {
        selectorId('modal_message').innerText = 'You have not any balance'
        selectorId('modal_close').style.display = 'block'
    } else if(!percentage || isNaN(percentage)){
        selectorId('modal_message').innerText = 'Please provide a valid percentage value'
        selectorId('modal_close').style.display = 'block'
    } else if (percentage > 100) {
        selectorId('modal_message').innerText = 'You cannot save more than you have'
        selectorId('modal_close').style.display = 'block'
    }
    
    else {
        savingAmount = (previousBalance * percentage) / 100
        selectorId('savingAmount').innerText = savingAmount
        selectorId('remainingBalance').innerText = previousBalance - savingAmount
    }
})



// modal
selectorId('modal_close').addEventListener('click', function () {
    selectorId('modal_close').style.display = 'none'
})


