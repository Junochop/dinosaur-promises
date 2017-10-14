"use strict";

var outputDiv = $("#dinoMan");
function printToDom(strang){
	console.log(strang);
  	$("#dinoMan").append(strang);
}

var domString = function(dinosaur){
	var newMsg = "";
			newMsg += `<div class=${dinosaur.info ==='Carnivore' ? 'card-bad' : 'card-good'}>`;
			newMsg += `<h4>${dinosaur.type}<br></h4>`;
			newMsg += `<h5>${dinosaur.bio}<br></h5>`;
			if (dinosaur.info === 'Carnivore') {
				newMsg += `<h4>Has some tasty snacks.</h4>`;
			} else {
				newMsg += `<h4>Has some mean poop snacks.</h4>`;
			}
	    	newMsg += `<div class='card-holder'>`;
	    	dinosaur.snacks.forEach((cat)=> {
	    		newMsg += `<div class='card'>`;
	    		newMsg += `<h5>${cat.name}</h5>`;
	    		newMsg += `<div class='card-image'>`;
	    		newMsg += `<img src='${cat.imageUrl}'>`;
	    		newMsg += `</div>`;
	    		newMsg += `<p class='card-description'>${cat.specialSkill}</p>`;
	    		newMsg += `</div>`;
	    	});
	    	newMsg += `</div>`;	
			newMsg += `</div>`;
   printToDom(newMsg);
 // $("#dinoMan").append(newMsg);
};





module.exports = domString;



//if carnovore ? apply car-bad : if not apply card-good