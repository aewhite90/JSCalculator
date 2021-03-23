const defaultDisplay = '0';
let secondNumber = false;
let numOne = '';
let numTwo = '';
let operand = '';

const operate = (a, operator, b) => {
  switch (operator) {
    case '+':
      displayText.textContent = add(a, b);
      break;
    case '-':
      displayText.textContent = subtract(a, b);
      break;
    case '*':
      displayText.textContent = multiply(a, b);
      break;
    case '/':
      displayText.textContent = divide(a, b);
      break;
  }
  numOne = '';
  numTwo = '';
  secondNumber = true;
}

const add = (numOne, numTwo) => {
  return parseFloat(numOne) + parseFloat(numTwo);
}

const subtract = (numOne, numTwo) => {
  return parseFloat(numOne) - parseFloat(numTwo);
}

const multiply = (numOne, numTwo) => {
  return Math.floor((parseFloat(numOne) * parseFloat(numTwo))*10)/10;
}

const divide = (numOne, numTwo) => {
  if (parseFloat(numTwo) === 0) return "Try again...";
  return Math.floor((parseFloat(numOne) / parseFloat(numTwo))*10)/10;
}

const equals = () => {
  numTwo = displayText.textContent;
  operate(numOne,operator,numTwo);
}

const resetNumber = () => {
  displayText.textContent = '';
  secondNumber = false;
}

const enterNumber = (e) => {
  if (secondNumber) resetNumber();
  if (displayText.textContent.length >= 12) {
    overflow.textContent='Maximum of 12 digits';
  } else {
    if (displayText.textContent == '0') {
      displayText.textContent = e.target.id;
    } else {
      displayText.textContent += e.target.id;
    }
  }
}

const enterOperator = (e) => {
  overflow.textContent='';
  operator = e.target.id;
  if (numOne !== '') {
    numTwo = displayText.textContent;
    operate(numOne, operator, numTwo);
    numOne = displayText.textContent;
  } else {
    numOne = displayText.textContent;
    secondNumber = true;
  }
}

const decimalPoint = (e) => {
  if (displayText.textContent.includes('.')) return;
  displayText.textContent += '.';
}

const flipOperate = (e) => {
  displayText.textContent = (parseFloat(displayText.textContent)*-1).toString();
}

const percent = (e) => {
  if (displayText.textContent !== '0') {
    displayText.textContent = (parseFloat(displayText.textContent)/100).toString();
  }
}

const deleteNum = (e) => {
  displayText.textContent = displayText.textContent.slice(0, -1);
}

const clear = (e) => {
  displayText.textContent = defaultDisplay;
  let numOne = '';
  let numTwo = '';
  let operand = '';
}

const numberButtons = Array.from(document.querySelectorAll('.number-btn'));
const operatorButtons = Array.from(document.querySelectorAll('.operator-btn'));
const decimalButton = document.querySelector('.decimal-btn');
const equalsButton = document.querySelector('.equals-btn');
const flipButton = document.querySelector('.flip-btn');
const percentButton = document.querySelector('.percent-btn');
const deleteButton = document.querySelector('.delete-btn');
const clearButton = document.querySelector('.clear-btn');

numberButtons.forEach(button => button.addEventListener('click', enterNumber));
operatorButtons.forEach(button => button.addEventListener('click', enterOperator));
decimalButton.addEventListener('click', decimalPoint);
equalsButton.addEventListener('click', equals);
flipButton.addEventListener('click', flipOperate);
percentButton.addEventListener('click', percent);
deleteButton.addEventListener('click', deleteNum);
clearButton.addEventListener('click', clear);

const displayText = document.querySelector('#display-text');
displayText.textContent = defaultDisplay;
const overflow = document.querySelector('#overflow');
