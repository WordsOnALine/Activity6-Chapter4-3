"use strict";
const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#calculate").addEventListener("click", processEntry);

});



const button_calculate = document.getElementById("calculate");
button_calculate.addEventListener("click", processEntry);

function processEntry() {
	const income = Number(document.getElementById("income").value);
	if (income <= 0) {
		alert("Enter an income greater than 0.")
	} else calculateTax();
}

function calculateTax() {
	const income = Number(document.getElementById("income").value);
	let tax = 0;


	if (income <= 9875) {
		tax = 0 + income * 0.1;
	} else if (income <= 40125) {
		tax = 987.5 + (income - 9875) * 0.12;
	} else if (income <= 85535) {
		tax = 4617.5 + (income - 40125) * 0.22;
	} else if (income <= 163300) {
		tax = 14605.5 + (income - 85535) * 0.24;
	} else if (income <= 207350) {
		tax = 33271.5 + (income - 163300) * 0.32;
	} else if (income <= 518400) {
		tax = 47367.5 + (income - 207350) * 0.35;
	} else {
		tax = 156235 + (income - 518400) * 0.37;
	}

	document.getElementById("tax").value = tax.toFixed(2);
}