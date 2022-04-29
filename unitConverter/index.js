//hard coded user input to start
let userInput = 20;

document.getElementById
("userinput-placeholder").
textContent = userInput;


let meterToFeet = document.getElementById("meter-to-feet");
let feetToMeter = document.getElementById("feet-to-meter");

let litersToGallons = document.getElementById("liters-to-gallons");
let gallonsToLiters = document.getElementById("gallons-to-meters");

let kilogramsToPounds = document.getElementById("kilograms-to-pounds");
let poundsToKilograms = document.getElementById("pounds-to-kilograms");

const meterToFeetConversion = function() {
  let output = Math.round(userInput * 3.2808);
  meterToFeet.textContent = userInput + " meters = " + output + " feet | ";
};

const feetToMeterConversion = function() {
  let output = Math.round(userInput / 3.2808);
  feetToMeter.textContent = userInput + " feet = " + output + " meters";
};


const litersToGallonsConversion = function() {
  let output = Math.round(userInput * 0.2641720524);
  litersToGallons.textContent = userInput + " liters = " + output + " gallons | ";
};

const gallonsToMetersConversion = function() {
  let output = Math.round(userInput / 0.2641720524);
  gallonsToLiters.textContent = userInput + " gallons = " + output + " liters";
};

const kilogramsToPoundsConversion = function() {
  let output = Math.round(userInput * 2.2046226218);
  kilogramsToPounds.textContent = userInput + " kilograms = " + output + " pounds | ";
};

const poundsToKilogramsConversion = function() {
  let output = Math.round(userInput / 2.2046226218);
  poundsToKilograms.textContent = userInput + " pounds = " + output + " kilograms";
};

meterToFeetConversion(userInput);
feetToMeterConversion(userInput);
litersToGallonsConversion(userInput);
gallonsToMetersConversion(userInput);
kilogramsToPoundsConversion(userInput);
poundsToKilogramsConversion(userInput);


