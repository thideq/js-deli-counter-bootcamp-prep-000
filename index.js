var katzDeliLine = [];
var myName = 'my name';

function takeANumber(katzDeliLine,myName) {
  var myString = '';
  katzDeliLine.push(myName)
  myString = "you are " + (katzDeliLine.length) + " in line";
  return myString;
}
function nowServing() {
  if (katzDeliLine==[]) {
    return 'There is nobody waiting to be served!'
  }
  else return katzDeliLine.pop();
}

function currentLine() {
  var line = katzDeliLine;
  var currentlineReturn = '';
  if (line==[]) {
    currentlineReturn=''
  }
  return
}