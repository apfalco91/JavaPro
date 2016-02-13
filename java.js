var firstVariable = 20;

var secondVariable = 10;

var addVariable = firstVariable + secondVariable;

var subVariable = firstVariable - secondVariable;

var multVariable = firstVariable * secondVariable;

var divVariable = firstVariable / secondVariable;

document.getElementById("add").innerHTML = "When I add " + firstVariable + " to " + secondVariable + ", I get " + addVariable + ".";
document.getElementById("subt").innerHTML = "When I subtract " + firstVariable + " by " + secondVariable + ", I get " + subVariable + ".";
document.getElementById("mult").innerHTML = "When I multiply " + firstVariable + " by " + secondVariable + ", I get " + multVariable + ".";
document.getElementById("divide").innerHTML = "When I divide " + firstVariable + " by " + secondVariable + ", I get " + divVariable + ".";