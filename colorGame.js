
var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"				
];
var colorDisplay = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".sqaure");
var pickedColor = colors[3];
colorDisplay.textContent = pickedColor;
for(var i = 0; i < squares.length ; i++){
	squares[i].style.backgroundColor = colors[i];
}


for(var i = 0; i < squares.length ; i++){
	squares[i].addEventListener("click",function(){

		var clickedColor = this.style.backgroundColor;
		if(clickedColor==pickedColor)
		{
			alert("correct");
		}
		else
		{
			alert("Wrong");
		}
	});
}

