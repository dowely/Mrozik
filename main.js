// menu css control

var menuItems = document.querySelectorAll(".menu li");

for (x in menuItems){
	
	menuItems[x].addEventListener("click", function(){
	
	this.classList.add("activeLi");
	for(y in getSiblings(this)){
		getSiblings(this)[y].classList.remove("activeLi");
	}
	
	});
	
}

//zwraca tablice zawierającą  elementu node
function getSiblings(node){
	
	var siblings = [];
	
	var kids = node.parentElement.children;
	
	for (key in kids){
		if( kids[key] != node) siblings.push(kids[key]);
	}
	
	return siblings;
}