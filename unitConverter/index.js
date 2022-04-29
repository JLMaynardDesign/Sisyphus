
// let userInput = document.querySelector("#user-input");
// console.log("userInput", userInput);
// // let numberInput = document.getElementById("number-input");
// // console.log("numberInput", numberInput);

let userInput = 20;

// let displayInput = document.getElementById("user-input");
//
// // const conversion = function(userInput) {
//
// };
//
//
let meterToFeet = document.getElementById("meter-to-feet");
let feetToMeter = document.getElementById("feet-to-meter");
// document.getElementById("number-input1").textContent = userInput;
// document.getElementById
// ("number-input2").textContent =
// userInput;
// document.getElementById
// ("number-input3").textContent =
// userInput;

document.getElementById("userinput-placeholder").textContent = userInput;

const meterToFeetConversion = function() {
  let output = Math.round(userInput * 3.2808);
  meterToFeet.textContent = userInput + " meters = " + output + " feet | ";
};

const feetToMeterConversion = function() {
  let output = Math.round(userInput / 3.2808);
  feetToMeter.textContent = userInput + " feet = " + output + " meters";
};


meterToFeetConversion(userInput);
feetToMeterConversion(userInput);