var katzDeliLine = [];
var name = 'my name'

function takeANumber(katzDeliLine,name) {
  var myString = '';
  katzDeliLine.push(name)
  myString = "you are" + (katzDeliLine.length) + "th in line";
  return myString;
}
console.log(takeANumber(["1", "2"],"moi"));