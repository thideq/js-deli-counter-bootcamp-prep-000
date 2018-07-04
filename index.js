var katzDeliLine = [];
var myName = 'my name';

function takeANumber(katzDeliLine,myName) {
  var myString = '';
  katzDeliLine.push(myName)
  myString = "you are" + (katzDeliLine.length) + "th in line";
  return myString;
}
console.log(takeANumber(["1", "2"],"moi"));