const input = document.querySelector(".log");
const button = document.querySelectorAll(".numb");
const result = document.querySelector(".res");
const del = document.querySelector(".delete");
const clear = document.querySelector(".clear");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function myf() {
    input.value = input.value + button[i].textContent;
  });
}
result.addEventListener("click", function myf() {
  input.value = eval(input.value);
});
del.addEventListener("click", function myf() {
  input.value = input.value.slice(0, -1);
});
clear.addEventListener("click", function myf() {
  input.value = "";
});

document.body.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "Digit1":
      input.value = input.value + parseInt("1");
      break;

    case "Digit2":
      input.value = input.value + parseInt("2");
      break;

    case "Digit3":
      input.value = input.value + parseInt("3");
      break;

    case "Digit4":
      input.value = input.value + parseInt("4");
      break;

    case "Digit5":
      input.value = input.value + parseInt("5");
      break;
    case "Digit6":
      input.value = input.value + parseInt("6");
      break;
    case "Digit7":
      input.value = input.value + parseInt("7");
      break;
    case "Digit8":
      input.value = input.value + parseInt("8");
      break;
    case "Digit9":
      input.value = input.value + parseInt("9");
      break;
    case "Digit0":
      input.value = input.value + parseInt("0");
      break;
    case "NumpadAdd":
      input.value = input.value + "+";
      break;
    case "Minus":
      input.value = input.value + "-";
      break;
    case "NumpadDivide":
      input.value = input.value + "/";
      break;
    case "NumpadMultiply":
      input.value = input.value + "*";
      break;
    case "Period":
      input.value = input.value + ".";
      break;
    case "Equal":
      input.value = eval(input.value);
      break;
    case "Backspace":
      input.value = input.value.slice(0, -1);
      break;
    case "KeyC":
      input.value = "";
      break;
    default:
      break;
  }
});
