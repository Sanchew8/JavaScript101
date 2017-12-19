// // LESSON 1
// // print "hello world" to the console
// console.log("hello world")
// // print "hello world" to the web page (AKA, the document)
// document.write("hello world")
// // prints a message in the pop up box
// alert ("hello world")
// // Practice of these three functions
// console.log("practice practice practice")
// document.write ("practice makes permanent")
// alert ("practice makes permanent")

// // LESSON 2
// var name = prompt("What's your name?")
// console.log(name)

// LESSON 3
// number
// var numberValue = 12 
// var numberValue2 = Number (prompt("choose a number between 1-100"))
// // console.log (numberValue)
// //boolean
// var boolValue = true
// //string
// var stringValue = "this is just the beginning"
// //array
// var arrayValue = [33, false, "string"]

// LESSON 4: CONTATENATION (adding variables together by using the addition sign)
// var combineVariables = numberValue + numberValue2
// console.log (combineVariables)

// LESSON 5: if/else (we use this to determine if something is true or false)
// if (numberValue > numberValue2) {
// 	alert (numberValue + " is greater than " + numberValue2)
// } else if (numberValue < numberValue2) {
// 	alert (numberValue2 + " is greater than " + numberValue)
// } else {
// 	alert("you chose the same mumber as me")
// }

// LESSON 6: comparison and logical operators 
// var num1 = 6
// var num2 = 10

// // = assigns a value to a variable
// // == tests to see if two values are equal
// // === tests to see if two values are equal and are the same type

// if (num1 == 6 || num2 == 100) {
// 	console.log ("true")
// } else {
// 	console.log ("false")
// }

// LESSON 7: looping
// Example of what a WHILE loop is:
// while (conditional == true) {
// 	do this thing
// }
// var username = prompt ("what's your name")

// while (username != "matt") {
// 	username = prompt ("what's your name")
// }

// Example of FOR loop:
// for (var i = 1; i <= 20; i = i + 1) {
// 	document.write (i)
// }

// LESSON 8: How JavaScript functions work
var num1 = 10
var num2 = 15

// Example of PARAMETERS and ARGUMENTS
// function add (parameter(s)) {
// 	document.write (num1 + num2)
// }

// add (arument(s))

function add (a, b) {
	document.write (a + b)
}

add (num1, num2)