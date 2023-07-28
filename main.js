const operators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

let inputA = "";
let operatorValue = "";
let inputB = 10;
const screenText = document.querySelector('.screen-text');

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        inputA += button.dataset.value;
        screenText.textContent = inputA;
    })
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.add('active');
        operatorValue = button.dataset.value;
        operatorButtons.forEach((button) => {
            button.disabled = true;
        })
    })
});


const operate = function (a, operator, b) {
  return operators[operator](a, b);
};

const equalsButton = document.querySelector('.equal');
equalsButton.addEventListener('click', () => {
    screenText.textContent = operate(inputA, operatorValue, inputB);
    operatorButtons.forEach((button) => {
        button.disabled = false;
        button.classList.remove('active');
    })
})
