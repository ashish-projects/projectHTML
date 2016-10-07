function myMove() {
	//alert("mymove started");
  var elem = document.getElementById("animate");
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 300 ) {
     	pos= pos - 300;
      //elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    } else {
      pos++;
      //elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
}

 window.addEventListener("load", myMove);