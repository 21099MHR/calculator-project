// setup variables and get a calculator instance
function CreateCalculator() {
  const calculator = new Calculator();
  calculator.firstNumber = document.getElementById("number_one").value;
  calculator.secondNumber = document.getElementById("number_two").value;
  return calculator;
}

// perform a calculation when the operator button is clicked
function calculate() {
    var calculator = CreateCalculator();
    var operator = getOperator();
    var value = calculator.operate(operator);
    updateResultText(value);
}

/**
 * set the text in the result section of the UI
 * @param {*} value
 */
function updateResultText(value) {
  document.getElementById("result_text").innerHTML = String(value);
}

// should clear input text values and focus the first number input
function clearValues() {
  document.getElementById("number_one").value = "";
  document.getElementById("number_two").value = "";
  document.getElementById("result_text").innerHTML =
    "Values have been cleared.";
  document.getElementById("number_one").focus();
}

/**
 * get the selected operator from the UI
 * @returns Operators
 */
function getOperator() {
  var operator = document.querySelector('input[name="math"]:checked').value;
  return operator;
}
