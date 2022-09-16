const bill = document.querySelector('#bill_value');
const tipPercentages = document.querySelectorAll('.perct_value');
const tipNumbers = document.querySelector('#persons');
const customPerctValue = document.querySelector('#custom_value');
const totalAmount = document.querySelector('#amount');
const resetBtn = document.querySelector('.reset_btn');
const errorMessage = document.querySelector('.error_message')
const TotalCost = document.querySelector('#total_value');

const percentages = Array.from(tipPercentages)

percentages.forEach((perct) => {
    perct.addEventListener('click', () =>{
        calculateTips(parseInt(perct.innerHTML));

    })
})

function calculateTips(percentage){
    // const perctValue = parseInt(percentage.innerHTML)
    const billValue = bill.value;
    const totalPersons = tipNumbers.value;

    if(billValue === "" || totalPersons === ""){
        alert("Enter a Value")
    } else if(parseInt(totalPersons) === 0){
        errorMessage.style.visibility = 'visible'
    } else {
        errorMessage.style.visibility = 'hidden'
        const calcPerct = (parseInt(billValue) * percentage) / 100
        const totalTips = (calcPerct / parseInt(totalPersons)).toFixed(2)
        const totalCostPerPerson = (billValue / totalPersons).toFixed(2)

        TotalCost.textContent = totalCostPerPerson
        totalAmount.textContent = totalTips    

        // CLear the input
        bill.value = '';
        tipNumbers.value = '';

        resetBtn.className = 'reset completed'
          
    }
}

customPerctValue.addEventListener('change', (e) =>{
    e.preventDefault()
    const custom = customPerctValue.value
    calculateTips(parseInt(custom))
    // customPerctValue.value = ''
})

resetBtn.addEventListener('click', () =>{
    TotalCost.textContent = '$0.00'
    totalAmount.textContent = '$0.00'
    resetBtn.className = 'reset'
    percentages.forEach(perct =>{
        const elem = perct.parentElement
        elem.className = 'perct'

    })

    bill.value = '';
    tipNumbers.value = '';
    customPerctValue.value = ''
})

// function completed(perctBtn){
//      // Add Complete Class
     
//      const el = perctBtn.parentElement
//      el.className = 'perct completed'
// }


