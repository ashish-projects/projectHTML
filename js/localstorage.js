if(typeof(Storage) !== 'undefined'){
   console.log("localstores capable browser!");
   localStorage.setItem("name", "ashish");
   document.getElementById("name").innerHTML = localStorage.getItem("name");
   localStorage.lastname = "raina";
   document.getElementById("lastname").innerHTML = localStorage.lastname;
   localStorage.removeItem('lastname');
   document.getElementById("word").innerHTML = localStorage.lastname;
}else{
  document.getElementById("name").innerHTML= "your browser does not support local storage";
}