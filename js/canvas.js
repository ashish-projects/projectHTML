function drawSimpleRect(){
var c = document.getElementById("canvas1");
var canvas = c.getContext("2d");
canvas.fillRect(100,100,200,200);
canvas.clearRect(150,150,50,50);
canvas.strokeRect(0,0,50,50);
canvas.fillStyle = "#FF0000";
canvas.fillRect(60,0,50,50);
}

drawSimpleRect();

function drawSimpleLine (){
   var c = document.getElementById("canvas2");
   var canvas = c.getContext("2d");
   canvas.moveTo(0,0);
   canvas.lineTo(280,280);
   canvas.stroke();
}

drawSimpleLine();

function drawSimpleCircle(){
   var c = document.getElementById("canvas3");
   var canvas = c.getContext("2d");
   canvas.beginPath();
   canvas.arc(140,140,140,0,2*Math.PI);
   canvas.stroke();
}

drawSimpleCircle();

function drawSimpleGradient(){
   var c = document.getElementById("canvas4");
   var canvas = c.getContext("2d");

   //create gradient
   var grd = canvas.createLinearGradient(0,0,0,280)
   grd.addColorStop(0,"#FF9933");
    grd.addColorStop(0.5,"white");
   grd.addColorStop(1," #138808");
   canvas.fillStyle = grd;
   canvas.fillRect(10,10,200,200);

}

drawSimpleGradient();

function simpleRadialGradient(){
   var c = document.getElementById("canvas5");
   var canvas = c.getContext("2d");

   //circular gradient
   var grd = canvas.createRadialGradient(150,150,10,150,150,120);
   grd.addColorStop(0,"white");
   grd.addColorStop(0.5,"red");
   grd.addColorStop(1,"white");

   //fill with gradient
   canvas.fillStyle = grd;
   canvas.fillRect(0,0,300,300);

}

simpleRadialGradient();

function createSimpleText(){
   var c = document.getElementById("canvas6");
   var canvas = c.getContext("2d");
   canvas.font = "bold 80px Tohoma";
   canvas.fillStyle = "red";
   canvas.fillText("Ashish", 10,130);
}

createSimpleText();

window.onload = function displayImage(){

   var c = document.getElementById("canvas7");
   var canvas = c.getContext("2d");
   var img = new Image();
   img.src = "./images/facebook.png";
   img.onload = function () {
    canvas.drawImage(img, 10, 10);
   }

}


function drawDiagonals (){
   var c = document.getElementById("canvas8");
   var ctx = c.getContext("2d");
   ctx.moveTo(20,30);
   ctx.lineTo(60,80);
   ctx.lineTo(80,140);
   ctx.lineTo(300,150);
   ctx.closePath();
   ctx.fill();
}

drawDiagonals();

 //************************ second canvas starts here

function drawRandomLines (){

   var c = document.getElementById("canvas9");
   var ctx = c.getContext("2d");

   var number1 = 100 * Math.random();
   var number2 = 300 * Math.random();
   var number3 = 300 * Math.random();
   var number4 = 300 * Math.random();


   ctx.moveTo(number1,number2);
   ctx.lineTo(number3,number4);
   ctx.stroke();

}

function displayRandomText (alphabet, xaxis,yaxis){

   var c = document.getElementById("canvas9");
   var ctx = c.getContext("2d");
   ctx.font ="bold 40px arial";
   ctx.fillText (alphabet,xaxis,yaxis);
}

displayRandomText("Captcha123",10,130);
setInterval(drawRandomLines, 100);



function writeName(){

   var c = document.getElementById("canvas10");
   var ctx = c.getContext("2d");
   ctx.font = "bold 50px arial";
   ctx.fillStyle = 'black';
   ctx.fillText("...Ashish...", 10, 150);
   ctx.fillStyle = 'grey';
   setTimeout(function(){ ctx.fillText("...Ashish...", 10, 150); }, 1000);
}
setInterval(writeName, 2000);

function createBoxWithShadow(){
   var c = document.getElementById("canvas11");
   var canvas = c.getContext("2d");
   canvas.shadowBlur = 20 ;
   canvas.shadowOffsetX = 20 ;
   canvas.shadowOffsetY = 20;
   canvas.shadowColor = "black";
   canvas.fillStyle = "red";
   canvas.fillRect(10,10,100,100);

}

createBoxWithShadow();

function translateRect(){
	var c = document.getElementById("canvas12");
	var canvas = c.getContext("2d");
	canvas.fillRect(10,10,100,150);
	canvas.translate(90,90);
	canvas.fillStyle = "grey";
	canvas.fillRect(10,10,100,150);

}

translateRect();

function repeatImage(){
	var c = document.getElementById("canvas13");
	var canvas = c.getContext("2d");
	var img = document.getElementById("lamp");
	var pattern = canvas.createPattern(img, "repeat-x");
	canvas.fillStyle = pattern;
	canvas.fillRect(0,0,250,200);
}

repeatImage();

function drawAwesomeLines(){
	var c = document.getElementById("canvas14");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.lineWidth = 10;
	ctx.lineCap = "round";
	ctx.lineJoin = "miter";
	ctx.miterLimit = 2;
	ctx.moveTo(25,125);
	ctx.lineTo(50,50);
	ctx.lineTo(75,125);
	ctx.stroke();
}

drawAwesomeLines();

function drawQuadraticCurve(){
	var c = document.getElementById("canvas15");
	var canvas = c.getContext("2d");
	canvas.moveTo(10,10);
	canvas.quadraticCurveTo(20,300,250,30);
	canvas.stroke();

}

drawQuadraticCurve();

function drawBezeirCurve(){
	var c = document.getElementById("canvas16");
	var canvas = c.getContext("2d");
	canvas.moveTo(10,10);
	canvas.bezierCurveTo(20,30,20,250,250,30);
	canvas.stroke();

}

drawBezeirCurve();

function drawArc(){
	var c = document.getElementById("canvas17");
	var canvas = c.getContext("2d");
	canvas.moveTo(10,10);
	canvas.arcTo(150,10,150,70,50);
	canvas.stroke();
}

drawArc();

function imageData(){
	var c = document.getElementById("canvas18");
	var canvas = c.getContext("2d");
	var img = canvas.createImageData(100,100);
	for (var i = 0; i < img.data.length; i+=4) {
		img.data[i + 0] = 250;
		img.data[i + 1] = 50;
		img.data[i + 2] = 50;
		img.data[i + 3] = 255;
	};
	canvas.putImageData(img, 10,10);
}

imageData();