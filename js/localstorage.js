if(typeof(Storage) !== undefined){

   localStorage.setItem("name", "ashish");

} else {

console.log("Browser does not support local storage");

}

document.getElementById("storageValue").innerHTML = localStorage.getItem("name");


localStorage.removeItem("name");