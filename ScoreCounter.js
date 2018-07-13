var p1btn = document.querySelector("#p1");
var p2btn = document.querySelector("#p2");
var numInput = document.querySelector("input");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var resetButton = document.getElementById("reset");
var changeNum = document.querySelector("p");
var winningScoreDisplayed = document.querySelector("p span");

var plscore=0;
var p2score=0;
var gameover=false;
var winningScore = 5;
p1btn.addEventListener("click",function(){
	if(!gameover){
		plscore++;
		if(plscore === winningScore)
		{
			gameover=true;
			p1Display.classList.add("winner");
		}
		
		p1Display.textContent = plscore;
	}
	console.log(plscore);
	
});

p2btn.addEventListener("click",function(){
		if(!gameover){
		p2score++;
		if(p2score === winningScore)
		{
			gameover=true;
			p2Display.classList.add("winner");
		}
		
		p2Display.textContent = p2score;
	}
	console.log(p2score);
});


resetButton.addEventListener("click",function(){
		p2score=0;
		plscore=0;
		p1Display.textContent = 0;
		p2Display.textContent = 0;
		p1Display.classList.remove("winner");
		p2Display.classList.remove("winner");
		gameover=false;
		
});

numInput.addEventListener("change",function(){
	winningScoreDisplayed.textContent=numInput.value;
	winningScore = Number(numInput.value);
})