var katzDeli = [];
var myName = 'my name';

function takeANumber(line,myName) {
  var myString = '';
  line.push(myName)
  myString = "Welcome, " + myName + ". You are number " + (line.length) + " in line.";
  return myString;
}
function nowServing(line) {
  var myString = '';
  if (line.length===0) {
    myString = 'There is nobody waiting to be served!'
  }
  else {myString = 'Currently serving ' + line.shift() + '.'
  }
  return myString
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
