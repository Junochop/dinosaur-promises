"use strict";

var dom = require('./dom');


var dinosaurs = [];

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


var firstDinosaurJSON = function(){
	return new Promise(function(resolve, reject){
		$.ajax("./db/dinosaurs.json").done(function(data1){
				resolve(data1.dinosaurs1);
	}).fail(function(error1){
		reject(error1);
	});
	
// 		
  });

};


var secondDinosaurJSON = function(){
	return new Promise(function(resolve, reject){
		$.ajax("./db/dinosaurs2.json").done(function(data2){
				resolve(data2.dinosaurs2);
	}).fail(function(error2){
		reject(error2);
	});
	
// 		
  });

};


var thirdDinosaurJSON = function(){
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
var dinoGetter = function(){
	firstDinosaurJSON().then(function(results){
		//console.log("results from dino", results);
		results.forEach(function(dino){
			dinosaurs.push(dino);
		});


		
		secondDinosaurJSON().then(function(results2){
			results2.forEach(function(dino){
				dinosaurs.push(dino);
			});
			console.log("dinosaur from dino2", dinosaurs);
		});

		thirdDinosaurJSON().then(function(results3){
			results3.forEach(function(dino){
				dinosaurs.push(dino);
			});
			console.log("dinosaur from dino3", dinosaurs);
		});

	}).catch(function(error){
		console.log("error from dino", error);
	});

};

var dinoGetter = function(){
	firstDinosaurJSON().then(function(results){
		//console.log("results from dino", results);
		results.forEach(function(dino){
			dinosaurs.push(dino);
		});
		console.log("dinosuars", dinosaurs);
	});

};



var initializer = function(){

	dinoGetter();
};
var getDinosaurs = function(){
	return dinosaurs;
};

module.exports = {initializer:initializer, getDinosaurs:getDinosaurs};