class Calculator {
  firstNumber;
  secondNumber;
  operator;
  value;

  constructor(firstNumber, secondNumber, operator) {
    this.firstNumber = firstNumber;
    this.secondNumber = secondNumber;
    this.operator = operator;
    this.value = 0;
  }

  // determine the current operation's label
  getAction() {
    var operator = getOperator();

    switch (operator) {
      case "add":
        return "add";
        break;
      case "subtract":
        return "subtract";
        break;
      case "multiply":
        return "multiply";
        break;
      case "divide":
        return "divide";
        break;
      default:
        alert("...how??");
        break;
    }
  }

  // perform a calculation based on the currently selected operation
  operate(operator) {
    switch (operator) {
      case "add":
        this.add();
        break;
      case "subtract":
        this.subtract();
        break;
      case "multiply":
        this.multiply();
        break;
      case "divide":
        this.divide();
        break;
    }

    return this.value;
  }

  attemptedDivideByZero = false;

  // perform addition operation
  add() {
    this.value = this.firstNumber + this.secondNumber;
  }

  // perform subtraction operation
  subtract() {
    value = this.firstNumber - this.secondNumber;
  }

  // perform multiplication operation
  multiply() {
    this.value = this.firstNumber * this.secondNumber;
  }

  // perform divide operation
  divide() {
    if (this.secondNumber == 0) {
      this.attemptedDivideByZero = true;
      alert("Attempting to divide by 0. Operation aborted.");
    } else this.value = this.firstNumber / this.secondNumber;
  }
}

//DO NOT TOUCH THIS LINE OF CODE//
let unit_test = Calculator;
