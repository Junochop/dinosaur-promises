"use strict";

var outputDiv = $("#dinoMan");
function printToDom(strang){
	console.log(strang);
  	$("#dinoMan").append(strang);
}

var domString = function(dinosaur){
	var newMsg = "";
			newMsg += `<div>`;
			newMsg += `<h5>${dinosaur.name}<br></h5>`;
	    	newMsg += `<br>`;	
			newMsg += `</div>`;
   printToDom(newMsg);
 // $("#dinoMan").append(newMsg);
};





module.exports = domString;