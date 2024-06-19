function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
      return 'Cannot divide by zero';
  }
  return a / b;
}

function performOperation() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operation = document.getElementById('operation').value;

  let result;

  switch (operation) {
      case 'add':
          result = add(num1, num2);
          break;
      case 'subtract':
          result = subtract(num1, num2);
          break;
      case 'multiply':
          result = multiply(num1, num2);
          break;
      case 'divide':
          result = divide(num1, num2);
          break;
      default:
          result = 'Invalid operation';
  }

  document.getElementById('result').textContent = `Result: ${result}`;
}
