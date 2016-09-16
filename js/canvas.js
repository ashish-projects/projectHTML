function drawDiagonals (){
	var c = document.getElementById("canvas1");
	var ctx = c.getContext("2d");
	ctx.moveTo(0,0);
	ctx.lineTo(300,300);
	ctx.moveTo(300,0);
	ctx.lineTo(0,300);
	ctx.stroke();
}

drawDiagonals();

 // second canvas starts here

function drawRandomLines (){

	var c = document.getElementById("canvas2");
	var ctx = c.getContext("2d");

	var number1 = 100 * Math.random();
	var number2 = 300 * Math.random();
	var number3 = 300 * Math.random();
	var number4 = 300 * Math.random();

	//console.log(number1);

	ctx.moveTo(number1,number2);
	ctx.lineTo(number3,number4);
	ctx.stroke();

}

function displayRandomText (alphabet, xaxis,yaxis){

	var c = document.getElementById("canvas2");
	var ctx = c.getContext("2d");
	ctx.font ="30px arial";
	ctx.strokeText (alphabet,xaxis,yaxis);
}

displayRandomText("randomText",10,50);
setInterval(drawRandomLines, 100);

//third canvas starts here

function drawCircle (){
	var c = document.getElementById("canvas3");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.arc(150,150,50,0,2*Math.PI);
	ctx.stroke();
}

drawCircle();

function writeName(){
	var c = document.getElementById("canvas4");
	var ctx = c.getContext("2d");
	ctx.font = "30px arial"
	ctx.strokeText("ashish", 10, 50);
}

writeName();

function linearGradient (){
	var c = document.getElementById("canvas5");
	var ctx = c.getContext("2d");

	// create gradient
	var grd = ctx.createLinearGradient(0,0,300,300);
	grd.addColorStop(0,"white");
	grd.addColorStop(1,"green");

	ctx.fillStyle = grd;
	ctx.fillRect(0,0,300,300);
}

linearGradient();

function radialGradient (){

var c = document.getElementById("canvas6");
var ctx = c.getContext("2d");

var grd = ctx.createRadialGradient(150,150,150,150,150,0);
grd.addColorStop(0,"red");
grd.addColorStop(1,"white");

// Fill with gradient
ctx.fillStyle=grd;
ctx.fillRect(0,0,300,300);

}

radialGradient();

