const rs = require("readline-sync");

let question;

const Operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const Operators = Object.keys(Operations);

function calculator(obj, question, num1, num2) {
  return obj[question](num1, num2);
}

function getValidNumber(operandOrder) {
  let input;
  while (true) {
    console.log(`Please enter the ${operandOrder} number`);
    input = rs.prompt();
    if (!isNaN(input) && input.trim() !== "") {
      return Number(input);
    } else {
      console.log("This is not a number.");
    }
  }
}

function getValidOperator(operators, question) {
  if (operators.includes(question)) {
    const [input1, input2] = ["first", "second"].map((operandOrder) =>
      getValidNumber(operandOrder)
    );
    const result = calculator(Operations, question, input1, input2).toFixed(2);
    console.log(`The result is: ${result}`);
  } else {
    console.log(
      "That is not a valid operation. Please choose between '-', '+', '*', or '/'."
    );
    runCalculator();
  }
}

function runCalculator() {
  question = rs.question("What operation would you like to perform? ");
  getValidOperator(Operators, question);
}

runCalculator();
