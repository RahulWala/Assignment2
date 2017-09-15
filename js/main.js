
function myNew(){
	document.getElementById('divi').style.transition = "width height";
}

function validate(){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var msg = document.getElementById("message").value;

	if(name == ""){
		alert("Please enter your name");
		return false;
	}else if(email == ""){
		alert("please enter your mail");
		return false;
	}else if(msg == ""){
		alert("Enter your experience");
		return false;
	}else{
		alert("Thank u");
		document.getElementById("form").reset();
	}
}

function sub(){

}