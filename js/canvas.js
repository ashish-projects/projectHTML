

function drawRandomLines (){

	var c = document.getElementById("canvas1");
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

function DisplayRandomText (alphabet, xaxis){

	var c = document.getElementById("canvas1");
	var ctx = c.getContext("2d");
	ctx.font ="30px arial";
	ctx.fillText (alphabet,xaxis,100);
}


//setInterval(drawRandomLines, 100);


function writeName (){
	var name = [ "a", "s" , "h" , "i", "s" , "h" ] ;
	for (var i=0; i< name.length; i++){
		 var x = 100 + 25 * i;
		 // console.log(i);
		 console.log(name[i]);
		DisplayRandomText (name[i], x);

	}
}

writeName();