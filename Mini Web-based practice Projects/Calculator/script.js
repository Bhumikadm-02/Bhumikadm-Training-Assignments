let result = document.getElementById('result');     //id result is used to get elements

function insert(num) {
  result.value += num;
}

function clearAll() {
  result.value = '';
}

function calculate() {
  result.value = eval(result.value);    //eval() is built in funtion
}

function operate(op) {
  result.value += op;
}
