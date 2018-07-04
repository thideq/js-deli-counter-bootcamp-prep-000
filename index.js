var katzDeliLine = [];
var myName = 'my name';

function takeANumber(katzDeliLine,myName) {
  var myString = '';
  katzDeliLine.push(myName)
  if (katzDeliLine.length=1) {
    myString = "you are" + (katzDeliLine.length) + "st in line";
  }
    else if (katzDeliLine.length=2) {
    myString = "you are" + (katzDeliLine.length) + "nd in line";
  }
  else {myString = "you are" + (katzDeliLine.length) + "th in line";}
  return myString;
}
console.log(takeANumber(["1", "2"],"moi"));