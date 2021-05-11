var cnty = 0;
var cntc = 0;
var reply = function() {
	var compChoice = getComputerChoice();
	if(this.id === compChoice) { document.getElementById("draw").innerHTML="DRAW";}
	else if(this.id === "scissors") {
		document.getElementById("draw").innerHTML="";
		document.getElementById("yemoj").innerHTML = "✌";
		if(compChoice === "paper") {
			cnty++;
			document.getElementById("yourscore").innerHTML = cnty;
			document.getElementById("cemoj").innerHTML = "✋";
		}
		else {
			cntc++;
			document.getElementById("compscore").innerHTML = cntc;
			document.getElementById("cemoj").innerHTML = "✊";
		}
	}
	else if(this.id === "paper") {
		document.getElementById("draw").innerHTML="";
		document.getElementById("yemoj").innerHTML = "✋";
		if(compChoice === "rock") {
			cnty++;
			document.getElementById("yourscore").innerHTML = cnty;
			document.getElementById("cemoj").innerHTML = "✊";
		}
		else {
			cntc++;
			document.getElementById("compscore").innerHTML = cntc;
			document.getElementById("cemoj").innerHTML = "✌";
		}
	}
	else if(this.id === "rock") {
		document.getElementById("draw").innerHTML="";
		document.getElementById("yemoj").innerHTML = "✊";
		if(compChoice === "scissors") {
			cnty++;
			document.getElementById("yourscore").innerHTML = cnty;
			document.getElementById("cemoj").innerHTML = "✌";
		}
		else {
			cntc++;
			document.getElementById("compscore").innerHTML = cntc;
			document.getElementById("cemoj").innerHTML = "✋";
		}
	}

}
document.getElementById("scissors").onclick = reply;
document.getElementById("paper").onclick = reply;
document.getElementById("rock").onclick = reply;

function getComputerChoice() {
	switch(Math.floor(Math.random()*3)) {
		case 0: return 'scissors';
		case 1: return 'paper';
		case 2: return 'rock';
	}
}