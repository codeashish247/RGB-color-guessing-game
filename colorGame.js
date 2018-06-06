var colors=generateRandomColors(6);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
var numSquares=6;



easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	messageDisplay.textContent="";
	h1.style.backgroundColor="steelblue";
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});


hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	messageDisplay.textContent="";
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	h1.style.backgroundColor="steelblue";
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display = "block";
	}
});

reset.addEventListener("click",function(){
	reset.textContent="New Colors";
	messageDisplay.textContent="";
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	h1.style.backgroundColor="steelblue";
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}
});

colorDisplay.textContent=pickedColor;

for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click",function(){	
	    if(this.style.backgroundColor===pickedColor){
	    	for (var i = 0; i < squares.length; i++) {
	    		squares[i].style.backgroundColor=pickedColor;
	    	}
	    	messageDisplay.textContent="Correct!";
	    	reset.textContent="Play Again?";
	    	h1.style.backgroundColor=pickedColor;
	    }
	    else{
	    	this.style.backgroundColor= "#232323";
	    	messageDisplay.textContent="Try Again!";
	    }
	});
}

function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	//pick a "some color" from 0-255
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+ r + ", " + g +", " + b + ")";
}

function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}