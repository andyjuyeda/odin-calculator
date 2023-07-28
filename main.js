const operators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

let inputA = "";
let operatorValue = "";
let inputB = "";
let operatorSelected = false;

const screenText = document.querySelector(".screen-text");

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!operatorSelected) {
      inputA += button.dataset.value;
      screenText.textContent = inputA;
    } else {
      inputB += button.dataset.value;
      screenText.textContent = inputB;
    }
  });
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (operatorSelected) {
      inputA = operate(parseFloat(inputA), operatorValue, parseFloat(inputB));
      screenText.textContent = inputA;
      inputB = "";
    }
    operatorValue = button.dataset.value;
    operatorSelected = true;
  });
});

const operate = function (a, operator, b) {
  return operators[operator](a, b);
};

const equalsButton = document.querySelector(".equal");
equalsButton.addEventListener("click", () => {
  inputA = operate(parseFloat(inputA), operatorValue, parseFloat(inputB));
  screenText.textContent = inputA;
  inputB = "";
  operatorSelected = false;
});

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
  inputA = "";
  operatorValue = "";
  inputB = "";
  operatorSelected = false;
  screenText.textContent = "";
  operatorButtons.forEach((button) => {
    button.disabled = false;
    button.classList.remove("active");
  });
});
