let display = document.getElementById('display');
let expression = '';

function addToDisplay(value) {
  expression += value;
  display.value = expression;
}

function clearDisplay() {
  expression = '';
  display.value = '';
}

function calculate() {
  try {
    let result = eval(expression);
    display.value = result;
    expression = ''; // clear expression after calculation
  } catch (error) {
    display.value = 'Error';
    expression = ''; // clear expression in case of error
  }
}