const output = document.getElementById("output-value");
const history = document.getElementById("history-value");

let input1 = "",
  input2 = "",
  ans = "",
  opStr = "";

function numFun(val) {
  input1 = input1 + val;
  // console.log(input1);
  output.innerHTML = input1;
}

function decFun(val) {
  if (input1.includes(".")) {
    output.innerHTML = input1;
  } else {
    cInput1 = input1;
    input1 = input1 + val;
    output.innerHTML = val + cInput1;
  }
}

function opFun(op) {
  opStr = op;
  input2 = input1 + op;
  if (op === "x" || op === "%") {
    int2 = input1 + op;
  } else {
    int2 = op + input1;
  }
  input1 = "";
  history.innerHTML = int2;
}

function clearCurrentFun() {
  input1 = "";
  output.innerHTML = "0";
}
function clearAllFun() {
  input1 = "";
  input2 = "";
  ans = "";
  output.innerHTML = "0";
  history.innerHTML = "";
}
function equalFun(eql) {
  if (input2) {
    input2 = input2 + input1;
  } else {
    input2 = "";
  }
  console.log(input1, input2);
  history.innerHTML = eql + input2;
  calculation(opStr);
  output.innerHTML = ans;
  input1 = "";
}

function clearOneFun() {
  input1 = input1.substring(0, input1.length - 1);
  if (input1) {
    output.innerHTML = input1;
  } else {
    output.innerHTML = "0";
  }
}

function calculation(eql) {
  console.log(input1, input2);
  switch (eql) {
    case "+":
      ans = parseFloat(input2) + parseFloat(input1);
      break;
    case "-":
      ans = parseFloat(input2) - parseFloat(input1);
      if (ans < 0) {
        ans = String(parseFloat(input1) - parseFloat(input2)) + "-";
      }
      break;
    case "x":
      ans = parseFloat(input2) * parseFloat(input1);
      break;
    case "/":
      ans = parseFloat(input2) / parseFloat(input1);
      break;
    case "%":
      ans = (parseFloat(input2) / 100) * parseFloat(input1);
      break;
  }
}

function sinFun(sp) {
  switch (sp) {
    case "oneBy":
      input1 = 1 / parseFloat(input1);
      output.innerHTML = input1;
      break;
    case "pow":
      input1 = Math.pow(parseFloat(input1), 2);
      output.innerHTML = input1;
      break;
    case "rot":
      input1 = Math.sqrt(parseFloat(input1));
      output.innerHTML = input1;
      break;
    case "neget":
      output.innerHTML = input1 + "-";
      input1 = -1 * parseFloat(input1);
      console.log(input1);
  }
}
