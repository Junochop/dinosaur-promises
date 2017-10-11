(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let dom = require('./dom');


let dinosaurs = [];

//the old way -pyramid of Doom

// var dinoGetter = function(){
// 	$.ajax("./db/dinosaurs.json").done(function(data1){
// 		console.log("data1", data1);
// 		data1.dinosuar1.forEach(function(dino){
// 			dinosaurs.push(dino);
// 			//pushing through each on and push to the dino
// 		});
// 		console.log("dinosaurs after foreach", dinosaurs);
// 	$.ajax("./db/dinosaurs2.json").done(function(data2){
// 		data1.dinosuar2.forEach(function(dino){
// 			dinosaurs.push(dino);
// 		});
// 	$.ajax("./db/dinosaurs3.json").done(function(data3){
// 		data1.dinosuar3.forEach(function(dino){
// 			dinosaurs.push(dino);
// 		});
// 	});

// 	});
// };

const firstDinosaurJSON = () =>{
	return new Promise(function(resolve, reject){
		$.ajax("./db/dinosaurs.json").done(function(data1){
				resolve(data1.dinosaurs1);
	}).fail(function(error1){
		reject(error1);
	});
	
// 		
  });

};

const secondDinosaurJSON = () => {
	return new Promise(function(resolve, reject){
		$.ajax("./db/dinosaurs2.json").done(function(data2){
				resolve(data2.dinosaurs2);
	}).fail(function(error2){
		reject(error2);
	});
	
// 		
  });

};


const thirdDinosaurJSON = () => {
	return new Promise(function(resolve, reject){
		$.ajax("./db/dinosaurs3.json").done(function(data3){
				resolve(data3.dinosaurs3);
	}).fail(function(error3){
		reject(error3);
	});
	
// 		
  });

};

//promise works
// var dinoGetter = function(){
// 	firstDinosaurJSON().then(function(results){
// 		//console.log("results from dino", results);
// 		results.forEach(function(dino){
// 			dinosaurs.push(dino);
// 		});


		
// 		secondDinosaurJSON().then(function(results2){
// 			results2.forEach(function(dino){
// 				dinosaurs.push(dino);
// 			});
// 			console.log("dinosaur from dino2", dinosaurs);
// 		});

// 		thirdDinosaurJSON().then(function(results3){
// 			results3.forEach(function(dino){
// 				dinosaurs.push(dino);
// 			});
// 			console.log("dinosaur from dino3", dinosaurs);
// 		});

// 	}).catch(function(error){
// 		console.log("error from dino", error);
// 	});

// };


//promise -correct way
// var dinoGetter = function(){
// 	firstDinosaurJSON().then(function(results){
// 		//console.log("results from dino", results);
// 		results.forEach(function(dino){
// 			dinosaurs.push(dino);
// 		});
// 		return secondDinosaurJSON();
// 		}).then(function(results2){
// 			results2.forEach(function(dino){
// 				dinosaurs.push(dino);

// 			});
// 		return thirdDinosaurJSON();
// 		}).then(functino(results3){
// 		 results3.forEach(function(dino){
// 			dinosaurs.push(dino);	
// 		});
// 		console.log("dinosuars", dinosaurs);
// 		});
	

// };

const dinoGetter = () =>  {
	Promise.all([firstDinosaurJSON(), secondDinosaurJSON(), thirdDinosaurJSON()]).then(function(results){
		console.log("results from p all", results);
		results.forEach((result) => {
			result.forEach((dino) => {

			
			dinosaurs.push(dino);
		});
		});
		makeDinos();
	}).catch((error) =>{
		console.log("error from pall", error);
	});
};

const makeDinos =  () => {
	dinosaurs.forEach(function(dino){
		dom(dino);
	});

};


const initializer = () => {

	dinoGetter();
};
const getDinosaurs =  () => {
	return dinosaurs;
};

module.exports = {initializer:initializer, getDinosaurs:getDinosaurs};
},{"./dom":2}],2:[function(require,module,exports){
"use strict";

var outputDiv = $("#dinoMan");
function printToDom(strang){
	console.log(strang);
  	$("#dinoMan").append(strang);
}

var domString = function(dinosaur){
	var newMsg = "";
			newMsg += `<div>`;
			newMsg += `<h5>${dinosaur.type}<br></h5>`;
	    	newMsg += `<br>`;	
			newMsg += `</div>`;
   printToDom(newMsg);
 // $("#dinoMan").append(newMsg);
};





module.exports = domString;
},{}],3:[function(require,module,exports){
"use strict";


//var dom = require('./dom');

var data = require('./data');
$(document).ready(function() {

	//dom({name: "T-rex"});
  data.initializer();
});
},{"./data":1}]},{},[3]);
