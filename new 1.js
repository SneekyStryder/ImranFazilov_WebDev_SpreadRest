// Simple Calculator

let done = false;
let userInput;
let numbers = [];

while (done != true) {
	userInput = prompt("Enter a number to add, press Q to stop");
	if (userInput === "Q";) {
		done = true;
	}
	else {
		numbers.add(userInput);
	}
}

console.log("The numbers added together is: " + addNums(...numbers));
console.log("The numbers multiplied by 5 is: " + multiplyNums(...numbers));
console.log("The numbers divided by 2 is: " + divideNums(...numbers));

// Addition
function addNums(...numbers) {
	return numbers.reduce((total, num) => total + num, 0);
}

// Multiplication
function multiplyNums(...numbers) {
	return [...numbers].map((number => number * 5);
}

// Division
function divideNums(...numbers) {
	return [...numbers].map(number => number / 2); 

