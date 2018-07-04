var katzDeliLine = [];
var myName = 'my name';

function takeANumber(katzDeliLine,myName) {
  var myString = '';
  katzDeliLine.push(myName)
  myString = "Welcome, " + myName + ". You are number " + (katzDeliLine.length) + " in line.";
  return myString;
}
function nowServing() {
  if (katzDeliLine==[]) {
    return 'There is nobody waiting to be served!'
  }
  else {return katzDeliLine.pop()}
}

function currentLine() {
  var line = katzDeliLine;
  var currentlineReturn = '';
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
