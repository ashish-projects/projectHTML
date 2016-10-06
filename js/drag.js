function dragstart (ev){
	ev.dataTransfer.setData("text", ev.target.id);
   //console.log(ev.target.id);
}


function dragover(ev){
	ev.preventDefault();
  //document.getElementById(ev.target.id).style.background = "red";
}

function allowdrop(ev){
	ev.preventDefault();

}

function drop(ev){
		var data =  ev.dataTransfer.getData("text");
		ev.target.appendChild(document.getElementById(data));
      console.log(data);
      //var parent = document.getElementById(data).parentNode;
      //parent.style.background = "";
}