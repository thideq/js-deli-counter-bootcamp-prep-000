var katzDeli = [];
var myName = 'my name';

function takeANumber(katzDeliLine,myName) {
  var myString = '';
  katzDeliLine.shift(myName)
  myString = "Welcome, " + myName + ". You are number " + (katzDeliLine.length) + " in line.";
  return myString;
}
function nowServing(katzDeliLine) {
  if (katzDeliLine==[]) {
    return 'There is nobody waiting to be served!'
  }
  else {return 'currently serving ' + katzDeliLine.unshift() + '.'}
}

function currentLine(katzDeliLine) {
  var line = katzDeliLine;
  var currentlineReturn = '';
  var i = 0;
  if (line==[]) {
    currentlineReturn='The line is currently empty.'
  }
  else {
    currentlineReturn = 'The line is currently: '
    for (i=0; i<katzDeliLine.length; i++) {
      currentlineReturn = currentlineReturn + i +'. ' + nowServing(line)
    }
  
  }
  return currentlineReturn;
}
