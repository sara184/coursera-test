//****srting concatenation
// var string = "Hello";
// string += "World";
// string = string + "World";
// console.log(string + "!");




// ******* Regular math operators: +, -, *, /
// console.log((5+4) / 3);
// console.log(undefined / 5);
// function test1 (a) {
	// console.log(a / 5);
// }
// test1();


// ********* Equality 
// var x = 4, y = 4;
// if (x == y) {
// 	console.log("x=4 is equal to y=4");
// }

// x= "4";
// if (x == y) {
// 	console.log("x='4' is equal to y=4");
// }



// //  ******* Strict equality
// if (x === y) {
// 	console.log("Strict: x='4' is equal to y=4");
// }
// else {
// 	console.log("Strict: x='4' is NOT equal to y=4");
// }


// ****** IF statement (all false)
// if (false || null ||
// 	undefined || "" || 0 || NaN) {
// 	console.log("This line won't ever execute");
// }
// else {
// 	console.log("All False");

// }
// // ******** if statement (All true)
//  if (true && "hello" && 1 && -1 && "false"){
//   	// console.log("all true");
//  // }




// **** Best prctice for {} style
//Curly bre=ace on the same or next line...
// Is it just a style ?

// function a()
// {
// 	return
// 	{
// 		name: "Sara"
// 	};
// }

// function b() {
// 	return {
// 		name: "Sara"
// 	};
	
// }

// console.log(a());
// console.log(b());

// For loop 
// var sum = 0;
// for (var i = 0; i < 10; i++) {
// 	console.log(i);
// 	sum = sum + i;
// }
// console.log("sum of 0 through 9 is:" +sum);



//  Default values
// function orderChickenWith(sideDish) {
// 	sideDish = sideDish || "whatever!";
// 	console.log("Chicken with " + sideDish);
// }


// orderChickenWith("noodle");
// orderChickenWith();

//  Object creation
// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstName = "Mark";
// company.ceo.favColor = "blue";

// console.log(company);
// console.log("company CEO name is:" + company.ceo.firstName);
// console.log(company["name"]);

// company["stock of company"] =110;
// console.log("Stock price is:" + company["stock of company"]);

// // Better way: object literal
// var Facebook = {
// 	name: "Facebook",
// 	ceo: {
// 		firstName: "Mark",
// 		favColor: "blue"
// 	},
// 	"stock of company": 110
// };



// console.log(Facebook.ceo.firstName);


// Functions are First-class Data
// Functions are objects
function multiply(x, y){
	return x * y:
}