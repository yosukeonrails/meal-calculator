/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	var dishArray = {
	
	    padthai: {
	        name: 'Padthai',
	        price: 8.00
	    },
	    padkimao: {
	        name: 'Padkwimao',
	        price: 6.00
	    },
	    padsew: {
	        name: 'Padsew',
	        price: 7.00
	    },
	    tomyum: {
	        name: 'TomYum',
	        price: 9.00
	    }
	};
	
	var Dinner = function Dinner(name, dishesList) {
	
	    this.name = name;
	    this.dishesList = dishesList;
	
	    Dinner.prototype.getDinnerPrice = function () {
	
	        var sumArray = [];
	        for (var i = 0; i < this.dishesList.length; i++) {
	
	            sumArray.push(this.dishesList[i].price);
	        }
	
	        var sum = sumArray.reduce(add, 0);
	
	        function add(a, b) {
	            return a + b;
	        }
	        return sum;
	    };
	
	    Dinner.prototype.getDinnerTotal = function () {
	        return this.getDinnerPrice() + this.getTax();
	    };
	
	    Dinner.prototype.getTips = function () {
	
	        return this.getDinnerTotal() / 100 * 15;
	    };
	
	    Dinner.prototype.getGrandTotal = function () {
	
	        return this.getTips() + this.getDinnerTotal();
	    };
	
	    Dinner.prototype.getTax = function () {
	
	        var sumArray = [];
	        for (var i = 0; i < this.dishesList.length; i++) {
	
	            sumArray.push(this.dishesList[i].price);
	        }
	
	        var sum = sumArray.reduce(add, 0);
	
	        function add(a, b) {
	            return a + b;
	        }
	        return sum / 100 * 10;
	    };
	
	    Dinner.prototype.getName = function () {
	
	        for (var i = 0; i < this.dishesList.length; i++) {
	            console.log(this.dishesList[i].name);
	        }
	    };
	
	    Dinner.prototype.getDinner = function () {
	
	        for (var i = 0; i < this.dishesList.length; i++) {
	            console.log('Dish :' + this.dishesList[i].name);
	            console.log('Price:' + this.dishesList[i].price.toFixed(2) + '$');
	        }
	    };
	};
	
	var dinner1 = new Dinner('Paul', [dishArray.padthai, dishArray.padsew]);
	
	var dinner2 = new Dinner('Daniel', [dishArray.padthai, dishArray.tomyum]);
	
	var dinner3 = new Dinner('Matt', [dishArray.tomyum, dishArray.padsew]);
	
	var dinnerList = [dinner1, dinner2, dinner3];
	
	var Bill = function Bill(dinnerList) {
	
	    this.dinnerList = dinnerList;
	
	    Bill.prototype.printBillDinners = function () {
	
	        for (var i = 0; i < dinnerList.length; i++) {
	            // console.log (dinnerList[i].getDinnerPrice());
	            console.log('Name: ' + dinnerList[i].name);
	            dinnerList[i].getDinner();
	
	            console.log('Total Tax= ' + dinnerList[i].getTax().toFixed(2));
	            console.log('Total Tips= ' + dinnerList[i].getTips().toFixed(2));
	
	            console.log('Total Total= ' + dinnerList[i].getGrandTotal().toFixed(2));
	        }
	    };
	
	    Bill.prototype.printBillTotal = function () {
	
	        var sumArray = [];
	
	        for (var i = 0; i < dinnerList.length; i++) {
	            // console.log (dinnerList[i].getDinnerPrice());
	            console.log(dinnerList[i].getDinnerTotal() + '$');
	            sumArray.push(dinnerList[i].getDinnerTotal());
	        }
	
	        var sum = sumArray.reduce(add, 0);
	
	        function add(a, b) {
	            return a + b;
	        }
	
	        console.log('The total price of Bill was: ' + sum + '$');
	    };
	
	    Bill.prototype.printBillTips = function () {
	
	        var sumArray = [];
	
	        for (var i = 0; i < dinnerList.length; i++) {
	            // console.log (dinnerList[i].getDinnerPrice());
	            console.log(dinnerList[i].getTips() + '$');
	            sumArray.push(dinnerList[i].getTips());
	        }
	
	        var sum = sumArray.reduce(add, 0);
	
	        function add(a, b) {
	            return a + b;
	        }
	        console.log('The total tips of the Bill was: ' + sum + '$');
	    };
	};
	
	dinner1.getTips();
	
	var bill1 = new Bill(dinnerList);
	
	// console.log('Dinner total was: ' + dinner2.getDinnerPrice() + '$');
	//
	// console.log('Dinner total tax: ' + dinner2.getTax() + '$');
	//
	// console.log('Total with  tax:' + dinner2.getGrandTotal() + '$');
	//
	
	bill1.printBillTips();
	
	bill1.printBillDinners();
	
	// var dinner1 = new Dinner(name,dishesList)// dishesList is an array;
	//
	// dinner1.method1;
	// dinner1.method2
	// dinner1.method3

/***/ }
/******/ ]);
//# sourceMappingURL=meal-calculator.1.0.0.js.map