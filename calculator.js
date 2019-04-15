
const equalsButton = document.querySelector('button[data-behavior="equals"]')
const clearButton = document.querySelector('button[data-behavior="clear"]')
const textView = document.querySelector('div[data-behavior="view"]')
const operatorButtons = document.querySelectorAll('button[data-behavior="operator"]')
const buttons = document.querySelectorAll('button[data-behavior="number"]')

let userInput = []
let num1 = ''
let num2 = ''
let currentOperator = ''

equalsButton.addEventListener('click', () => {
  calculate()
})

clearButton.addEventListener('click', () => {
  clear()
})

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener('click', (event) => {
    typeOperator(event)
  })
})

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    typeNumber(event)
  })
})

const add = (num1, num2) => num1 + num2
const subtract = (num1, num2) => num1 - num2
const multiply = (num1, num2) => num1 * num2
const divide = (num1, num2) => num1 / num2

// type operators into the calculator display.
function typeOperator (event) {
  currentOperator = event.target.innerHTML
  textView.innerHTML = currentOperator
  num1 = Number(userInput.join(''))
  userInput = []
}

// type numbers into the calculator display.
function typeNumber (event) {
  userInput.push(event.target.innerHTML)
  textView.innerHTML = userInput.join('')
}

function calculate () {
  // Determine 2nd number
  num2 = Number(userInput.join(''))

  switch (currentOperator) {
    case '+':
      add(num1, num2)
      textView.innerHTML = add(num1, num2)
      break
    case '-':
      subtract(num1, num2)
      textView.innerHTML = subtract(num1, num2)
      break
    case 'x':
      multiply(num1, num2)
      textView.innerHTML = multiply(num1, num2)
      break
    case '/':
      divide(num1, num2)
      textView.innerHTML = divide(num1, num2)
      break
  }
}

function clear () {
  userInput = []
  num1 = ''
  num2 = ''
  currentOperator = ''
  textView.innerHTML = ''
}
