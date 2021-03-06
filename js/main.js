const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

function dark_mode () {
	document.body.classList.toggle('dark_modes');
	document.getElementsByClassName('email')[0].classList.toggle('dark_modes_input');
	document.getElementsByClassName('password')[0].classList.toggle('dark_modes_input');
}
