var w;

function startWorker(){
	console.log("worker started");

	if(typeof(Worker) !== "undefined"){
		if(typeof(w) == "undefined"){
			w = new Worker("js/webworker2.js");
		}
		w.onmessage = function(event){
			document.getElementById("result").innerHTML = event.data;
		}
	}
}

function stopWorker(){
		w.terminate();
		w = undefined;
}

