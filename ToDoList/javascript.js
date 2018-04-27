function push() {
	var text = document.getElementById('task').value;

	console.log (text);

	document.getElementById('tasklist').innerHTML += "<div><input type=\"checkbox\">" + text + "<button>X</button></div>";
}

function rip () {
	
}	

/*function delete () {

}*/