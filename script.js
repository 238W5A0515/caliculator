let isResultShown = false;

function appendToDisplay(value) {
  if (isResultShown) {
    document.getElementById('display').value = '';
    isResultShown = false;
  }
  document.getElementById('display').value += value;
}

function backspace() {
  let currentValue = document.getElementById('display').value;
  document.getElementById('display').value = currentValue.slice(0, -1);
}

function clearAll() {
  document.getElementById('display').value = '';
  document.getElementById('result').textContent = '';
}

function calculate() {
  try {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
    document.getElementById('result').textContent = 'Ans = ' + result;
    isResultShown = true;
  } catch (error) {
    document.getElementById('display').value = 'Error';
    document.getElementById('result').textContent = '';
  }
}

function scientific(func) {
  let display = document.getElementById('display');
  let value = parseFloat(display.value);
  if (isNaN(value)) {
    display.value = 'NaN';
    return;
  }
  let result;
  switch (func) {
    case 'sin': result = Math.sin(toRadians(value)); break;
    case 'cos': result = Math.cos(toRadians(value)); break;
    case 'tan': result = Math.tan(toRadians(value)); break;
    case 'sqrt': result = Math.sqrt(value); break;
    case 'log10': result = Math.log10(value); break;
    case 'log': result = Math.log(value); break;
    case 'fact': result = factorial(value); break;
  }
  display.value = result;
  document.getElementById('result').textContent = `${func}(${value}) = ${result}`;
  isResultShown = true;
}

function toRadians(deg) {
  return deg * (Math.PI / 180);
}

function factorial(n) {
  if (n < 0 || n % 1 !== 0) return NaN;
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}
