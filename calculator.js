const inputtt = document.querySelector("input");
let eqaulto = document.querySelector(".equalto");

let displayer = function (num) {
  inputtt.value += num;
};

eqaulto.addEventListener("click", function (e) {
  e.preventDefault();

  let a = inputtt.value;
  let x = eval(a);
  inputtt.value = x;
  if(inputtt.value == "undefined"){
    inputtt.value = "😶"

  }
});

let clearr = function () {
  inputtt.value = "  ";
};
let deletee = function () {
  inputtt.value = inputtt.value.slice(0, -1)
};
