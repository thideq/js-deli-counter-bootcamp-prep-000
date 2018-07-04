var katzDeli = [];
var myName = 'my name';

function takeANumber(line,myName) {
  var myString = '';
  line.shift(myName)
  myString = "Welcome, " + myName + ". You are number " + (line.length) + " in line.";
  return myString;
}
function nowServing(line) {
  if (line==[]) {
    return 'There is nobody waiting to be served!'
  }
  else {return 'currently serving ' + line.unshift() + '.'}
}

function currentLine(Line) {
  var i = 0;
  if (line==[]) {
    currentlineReturn='The line is currently empty.'
  }
  else {
    currentlineReturn = 'The line is currently: '
    for (i=0; i<line.length; i++) {
      currentlineReturn = currentlineReturn + i +'. ' + nowServing(line)
    }
  
  }
  return currentlineReturn;
}
