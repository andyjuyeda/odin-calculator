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
  num = operators[operator](a, b);
  if (num % 1 !== 0) {
    // check if the number has a decimal part
    const numOfDecimalPlaces = num.toString().split(".")[1].length;
    if (numOfDecimalPlaces > 10) {
      // check if the number of digits after the decimal point exceeds 10
      num = num.toFixed(10);
    }
  }
  return num;
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

const negativeButton = document.querySelector('.pos-or-neg');
negativeButton.addEventListener("click", () => {
    if (operatorSelected == false) {
        if (inputA != "") {
            if (inputA.includes("-")) {
                inputA = inputA.replace("-", "");
            } else {
                inputA = "-".concat(inputA);
            }
            screenText.textContent = inputA;
        }
    } else {
        if (inputB != "") {
            if (inputB.includes("-")) {
                inputB = inputB.replace("-", "");
            } else {
                inputB = "-".concat(inputB);
            }
            screenText.textContent = inputB;
        }
    }
});

const decimalButton = document.querySelector('.decimal');
decimalButton.addEventListener("click", () => {
    if (operatorSelected == false) {
        if (inputA.includes(".") == false) {
            inputA += ".";
        }
        screenText.textContent = inputA;
    } else {
        if (inputB.includes(".") == false) {
            inputB += ".";
        }
        screenText.textContent = inputB;
    }
});