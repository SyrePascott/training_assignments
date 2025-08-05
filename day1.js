//1. Variable Declaration & Reassignment

var firstName = "Martin"; //var firstName = "Yves";
//cause an error: Identifier 'firstName' has already been declared
//Redeclared a variable with var is allowed, but not recommended
console.log(firstName); //Output: Martin

//Reassigning variables
firstName = "Yves"; //Reassigning firstName
console.log(firstName); //Output: Yves

var lastName = "Abankwah"; //var lastName = "Syre";
//cause an error: Identifier 'lastName' has already been declared   
console.log(lastName); //Output: Abankwah

//Reassigning variables
lastName = "Syre"; //Reassigning lastName
console.log(lastName); //Output: Syre   

const PI_VALUE = 3.14; //const PI_VALUE = 3.14159;
//cause an error: Identifier 'PI_VALUE' has already been declared

//Declaring a constant variable  
console.log(PI_VALUE); //Output: 3.14
//Reassigning a constant variable will cause an error
// Uncommenting the line below will cause an error

//PI_VALUE = 3.14159; //Uncommenting this line will cause an error: Assignment to constant variable

//Reassigning a constant variable
//const PI_VALUE = 3.14159; //Uncommenting this line will cause 
//an error: Identifier 'PI_VALUE' has already been declared
//Reassigning a constant variable is not allowed



//2. String Manipulation
//Using string methods to manipulate strings    

let myString = "Hello JavaScript World!"; //Hello JavaScript World! 
console.log(myString.length); //Output: 12  
   

myString = myString.toUpperCase();
console.log(myString); //Output: HELLO JAVASCRIPT WORLD!

myString = myString.toLowerCase();
console.log(myString); //Output: hello javascript world!

myString = myString.replace("JavaScript", "JS");
console.log(myString); //Output: hello JS world!   

myString = myString.trim();
console.log(myString); //Output: hello JS world!

//ARRAY OPERATIONS 
let fruits = ["apple", "banana", "cherry"];
console.log(fruits); //Output: ["apple", "banana", "cherry"] 

fruits.push("grape"); //Adding an element to the end of the array
console.log(fruits); //Output: ["apple", "banana", "cherry", "grape"]

fruits.pop(); //Removing the last element from the array    
console.log(fruits); //Output: ["apple", "banana", "cherry"]

fruits.unshift("kiwi"); //Adding an element to the beginning of the array
console.log(fruits); //Output: ["kiwi", "apple", "banana", "cherry"]
fruits.shift(); //Removing the first element from the array
console.log(fruits); //Output: ["apple", "banana", "cherry"]

//3. Object Manipulation
//Creating an object and manipulating its properties    

let book = {
    title: "JavaScript Essentials",
    author: "Jane Doe",
    pages: 250
};

// Log the title of the book
console.log("Title:", book.title);  // Output: Title: JavaScript Essentials

// Update the pages property to a new value
book.pages = 300; //Updating the pages property 

// Add a new property isAvailable (boolean)
book.isAvailable = true; //Adding a new property isAvailable
// Log the entire book object after all modifications
console.log("Updated Book Object:", book); //Output: { title: 'JavaScript Essentials


// Log the title of the book
console.log("Title:", book.title);

// Update the pages property to a new value
book.pages = 300;

// Add a new property isAvailable (boolean)
book.isAvailable = true;

// Log the entire book object after all modifications
console.log("Updated Book Object:", book);

//ARITHMETIC OPERATIONS
let num1 = 15;
let num2 = 4;
let sum = num1 + num2; //Addition
let difference = num1 - num2; //Subtraction 
let product = num1 * num2; //Multiplication
let quotient = num1 / num2; //Division
let remainder = num1 % num2; //Modulus
let exponentiation = num1 ** num2; //Exponentiation
console.log("Sum:", sum); //Output: Sum: 19
console.log("Difference:", difference); //Output: Difference: 11

//COMPARISON OPERATORS

console.log(10 == "10"); //Output: true (Equality)
console.log(10 === "10"); //Output: false (Strict equality)
console.log(10 != "10"); //Output: false (Inequality)
console.log(10 !== "10"); //Output: true (Strict inequality)
console.log(7 > 5);      //Output: true (Greater than)
console.log(8 <= 8);     //Output: true (Less than or equal to
console.log(5 != 3);     //Output: true (Not equal to)
console.log("apple" != "orange"); //Output: true (Not equal to)

//Logical Operators
console.log(true && false); //Output: false (Logical AND)
console.log(true || false); //Output: true (Logical OR)
console.log(!true); //Output: false (Logical NOT)

//Bitwise Operators
console.log(5 & 3); //Output: 1 (Bitwise AND)   

