// my personal function for id selector
function selectorId(id) {
    return document.getElementById(id)
}

function inputValue(id) {
    let incomeTextValue = selectorId(id)
    return parseFloat(incomeTextValue.value)
}


// calculate button click
selectorId('calculate').addEventListener('click', function () {
    // income
    let income = inputValue('income')

    // expenses
    let food = inputValue('food')
    let rent = inputValue('rent')
    let clothes = inputValue('clothes')

    // error handling
    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)) {
        selectorId('modal_message').innerText = 'Please fill all input boxes with number'
        selectorId('modal_close').style.display = 'block'
    } else if (income < 0 || food < 0 || rent < 0 || clothes < 0) {
        selectorId('modal_message').innerText = 'Please fill all number positive'
        selectorId('modal_close').style.display = 'block'
    }
    else if(income > totalExpanse){
        let totalExpanse = food + rent + clothes
        selectorId('totalExpense').innerText = totalExpanse
    }




    // console.log(totalExpanse)

})





// modal
selectorId('modal_close').addEventListener('click', function () {
    selectorId('modal_close').style.display = 'none'
})


